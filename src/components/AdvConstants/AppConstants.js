class AppConstants {
  //#region KPI
  static ClientList = 100;
  static ClientDescription = "Happy clients";
  static People = 50; //this will be replaced later with the actual count from DB call
  static PeopleSay = "People say about her";
  static YOE = 5;
  static YOEs = "Years of Experience";
  //#endregion
  //#region Personal details
  static AdvocateName = "Advocate Sangita Chowdhuri";
  static Address = "12, Andul Road, Podra, Howrah - 711103";
  static Phone = "+91-9876543210";
  static Whatsapp = "+91-9874563210";
  static Email = "advocatesangita@gmail.com";
  //#endregion
  //#region  Image slider
  static Slider = [
    {
      location: `${window.location.origin}/Images/criminal-law.jpg`,
      caption: "We provide legal advices for Criminal matters",
    },
    {
      location: `${window.location.origin}/Images/civil-law.jpg`,
      caption: "We provide legal advices for Civil matters",
    },
    {
      location: `${window.location.origin}/Images/family-law.jpg`,
      caption:
        "We provide legal advices for Family issues like property matters.",
    },
    {
      location: `${window.location.origin}/Images/property-law.jpg`,
      caption: "We provide legal advices for Property matters",
    },
    {
      location: `${window.location.origin}/Images/real-estate-law.jpg`,
      caption: "We provide legal advices for Reat-Estate related matters",
    },
  ];
  //#endregion
  //#region Nav link paths
  static Home = "/";
  static About = "/about";
  static AreaOfWork = "/area";
  static Feedback = "/feedback";
  static ContactUs = "/contact";
  //#endregion
  //#region Nav link texts
  static HomeText="Home";
  static AboutText="About Sangita";
  static AreaOfWorkText="Area of Work";
  static FeedbackText="Your opinion";
  static ContactUsText="Contact";
  //#endregion
  static ContactText = "Need to get legal help? Fill this form and submit. Alternatively, you can mail us directly.";
}

export default AppConstants;
