const GoogleMap = () => {
  return (
    <div>
      <iframe
        style={{
          borderImageSource: "url('/footermapborder.png')",
          borderImageSlice: 14,
          borderWidth: "10px",
        }}
        title="Google Map"
        className="w-90 h-68 lg:w-[500px] lg:h-[250px] relative top-15 border-0 rounded-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.4211901692296!2d77.4978!3d28.4571329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce565f0000001%3A0x548952c90b21eae1!2sGCET!5e0!3m2!1sen!2sin!4v1711748612301!5m2!1sen!2sin"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
