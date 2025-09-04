export default function UserProfile({
  userName,
  address,
  phoneNumber,
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-4 p-4 border rounded-lg ${className}`}>
      <div className="flex items-center gap-3">
        <img
          src="images/img_profile_pic.png"
          alt="user image"
          className="h-10 w-10 object-contain"
          loading="lazy"
          draggable="false"
        />
        <p className="text-lg">Name : </p>
        <p className="text-base">{userName}</p>
      </div>
      <div>
        <p className="text-lg">Address :</p>
        <p className="text-base">{address}</p>
      </div>
      <div>
        <p className="text-lg">Phone Number :</p>
        <p className="text-base">{phoneNumber}</p>
      </div>
    </div>
  );
}
