import React from "react";
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {getInitials("John William")}
      </div>

      <div>
        <p className="text-sm font-medium">John William</p>
        <button
          className="text-sm text-slate-700 underline"
          type="button"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
