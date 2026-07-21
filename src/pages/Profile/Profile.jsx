import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileStats from "../../components/profile/ProfileStats";
import PersonalInfo from "../../components/profile/PersonalInfo";
import AcademicInfo from "../../components/profile/AcademicInfo";
import SkillsSection from "../../components/profile/SkillsSection";
import ResumeSection from "../../components/profile/ResumeSection";
import AboutSection from "../../components/profile/AboutSection";

import {
  getProfile,
  updateProfile,
} from "../../services/profileService";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [profile, setProfile] = useState({
    phone: "",
    dob: "",
    address: "",
    college: "",
    branch: "",
    graduationYear: "",
    rollNumber: "",
    cgpa: "",
    university: "",
    skills: "",
    linkedin: "",
    github: "",
    bio: "",
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const { data } = await getProfile();

      setProfile((prev) => ({
        ...prev,
        ...data,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = async () => {
    try {
      await updateProfile(profile);
      toast.success("Profile Updated Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Unable to Save Profile");
    }
  };

  const fields = Object.values(profile);

  const completion = Math.round(
    (fields.filter(Boolean).length / fields.length) * 100
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-10 px-4">
      <div className="max-w-7xl mx-auto">

        <ProfileHeader
          user={user}
          completion={completion}
        />

        <ProfileStats />

        <PersonalInfo
          user={user}
          profile={profile}
          handleChange={handleChange}
        />

        <AcademicInfo
          profile={profile}
          handleChange={handleChange}
        />

        <SkillsSection
          profile={profile}
          handleChange={handleChange}
        />

        <ResumeSection
          profile={profile}
          handleChange={handleChange}
        />

        <AboutSection
          profile={profile}
          handleChange={handleChange}
        />

        <div className="flex justify-end mt-8">
          <button
            onClick={handleSave}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold shadow-lg transition"
          >
            Save Profile
          </button>
        </div>

      </div>
    </div>
  );
}