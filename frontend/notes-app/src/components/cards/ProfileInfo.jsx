import React from "react";
import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ onLogout, userInfo }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-sm sm:font-medium bg-slate-100">
        {getInitials(userInfo?.fullName)}
      </div>

      <div>
        <p className="text-sm hidden sm:flex font-medium">
          {userInfo?.fullName}
        </p>
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
