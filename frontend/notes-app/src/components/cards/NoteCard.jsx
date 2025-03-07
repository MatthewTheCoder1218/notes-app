import React from "react";
import { MdCreate, MdDelete, MdOutlinePushPin } from "react-icons/md";
import moment from "moment";

// Responsive width handling using CSS media queries
const responsiveWidthStyles = `
  @media (max-width: 768px) {
    .note-card {
      
    }
  }
`;

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="border w-full rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out note-card">
        <div className="flex items-center justify-between ">
          <div>
            <h6 className="text-lg font-semibold">{title}</h6>
            <span className="text-xs text-slate-500">
              {moment(date).format("Do MMM YYYY")}
            </span>
          </div>

          <MdOutlinePushPin
            className={`icon-btn ${
              isPinned ? "text-primary" : "text-slate-300"
            }`}
            onClick={onPinNote}
          />
        </div>
        <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 40)}</p>
        <div className="flex items-center justify-between mt-2">
          <div className="text-sm text-slate-500">
            {tags.map((item) => `#${item} `)}
          </div>

          <div className="flex items-center gap-2">
            <MdCreate
              className="icon-btn hover:text-green-600 cursor-pointer"
              onClick={onEdit}
            />
            <MdDelete
              className="icon-btn hover:text-red-500 cursor-pointer"
              onClick={onDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
