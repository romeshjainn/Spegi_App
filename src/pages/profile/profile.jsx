import { Footer } from "../../components/common/footer";
import { LabelInput } from "../../components/common/label-input";

const Profile = () => {
  return (
    <div className=" flex flex-col justify-between">
      <header className="">
        <h2 className="text-[3vh] font-semibold border-b-[.2px] border-gray-400 pb-3">
          Your Profile
        </h2>
      </header>
      <main className="h-full flex flex-col gap-4 mt-4">
        <LabelInput
          label={"Name"}
          type={"text"}
          name={"name"}
          placeholder={"+91 9999999999"}
          lengthLimit={10}
          value={"Romesh Jain"}
        />
        <LabelInput
          label={"Number"}
          type={"text"}
          name={"name"}
          lengthLimit={10}
          value={"+91 9516949156"}
        />
        <LabelInput
          label={"Group Name"}
          type={"text"}
          name={"name"}
          placeholder={"+91 9999999999"}
          lengthLimit={10}
          value={"Romesh Jain"}
        />
        <LabelInput
          label={"Colleges Count"}
          type={"number"}
          name={"number"}
          placeholder={"+91 9999999999"}
          lengthLimit={10}
          value={6}
        />
      </main>
    </div>
  );
};

export default Profile;
