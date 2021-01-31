import React, { useState } from "react";

const width = 300;
const height = 300;
const borderStyle = "2px dotted #000";

const dropAreaImageStyle = {
    width,
    height
};

const dropAreaStyle = {
    ...dropAreaImageStyle,
    border: borderStyle
};

const Uploader = (props) => {
    const [data, setData] = useState(false);
    const [err, setErr] = useState(false);
    const onDrop = (e) => {
        e.preventDefault();
        const {
            dataTransfer: { files }
        } = e;
        console.log("Files: ", files);
        props.toggleText()
        const { length } = files;
        const reader = new FileReader();
        if (length === 0) {
            return false;
        }
        const fileTypes = [
            // "image/jpeg",
            "application/pdf",
            // "image/jpg",
            // "image/png"
        ];
        const { size, type } = files[0];
        setData(false);
        if (!fileTypes.includes(type)) {
            setErr("File format must be pdf");
            return false;
        }
        if (size / 1024 / 1024 > 2) {
            setErr("File size exceeded the limit of 2MB");
            return false;
        }
        setErr(false);

        reader.readAsDataURL(files[0]);
        reader.onload = (loadEvt) => {
            setData(loadEvt.target.result);
        };
    };
    const onDragStart = (e) => {
        e.preventDefault();
    };
    const onDelete = () => {
        setData(false)
        props.toggleText()
    };
    const onDragOver = (e) => {
        e.preventDefault();
    };
    return (
        <div>
            {err && <p>{err}</p>}
            <div
                style={dropAreaStyle}
                onDrop={(e) => onDrop(e)}
                onDragOver={(e) => onDragOver(e)}
            >
                {data && (
                    <img
                        style={dropAreaImageStyle}
                        src={
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png"
                        }
                    />
                )}
            </div>
            <div className="button-wrapper">
                {data && <button onClick={(event) => onDelete()}>Remove</button>}
            </div>
        </div>
    );
};
export default Uploader;
