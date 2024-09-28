import { useEffect, useState } from "react";
import { Footer } from "../../components/common/footer";
import { LabelInput } from "../../components/common/label-input";

const Profile = () => {
  const [data, setData] = useState({
    name: "Romesh Jain",
    mobileNumber: localStorage.getItem("mobileNumber"),
    groupName: localStorage.getItem("groupName"),
    noOfColleges: "10",
  });
  useEffect(() => {}, []);
  return (
    <div className=" flex flex-col justify-between">
      <header className="">
        <h2 className="text-[3vh] text-center font-semibold border-b-[.2px] border-gray-400 pb-3">
          Your Profile
        </h2>
      </header>
      <main className="h-full flex flex-col gap-4 mt-4">
        <LabelInput
          label={"Name"}
          type={"text"}
          name={"name"}
          lengthLimit={10}
          value={data.name}
        />
        <LabelInput
          label={"Number"}
          type={"text"}
          name={"name"}
          lengthLimit={10}
          value={data.mobileNumber}
        />
        <LabelInput
          label={"Group Name"}
          type={"text"}
          name={"name"}
          lengthLimit={10}
          value={data.groupName}
        />
        <LabelInput
          label={"No. Of Colleges"}
          type={"number"}
          name={"number"}
          lengthLimit={10}
          value={data.noOfColleges}
        />
      </main>
    </div>
  );
};

export default Profile;
