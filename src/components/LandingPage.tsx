// import React from "react";
// import { WavyBackground } from "../ui/wavy-background";
// import { ContainerScroll } from "../ui/container-scroll-animation";
// import { HoverEffect } from "../ui/card-hover-effect";
// import { AceternityButton } from "../ui/aceternity-button";
// import { useNavigate } from "react-router-dom";

// const LandingPage = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate("/chat");
//   };

//   const projects = [
//     {
//       title: "Transform Learning with Lerno",
//       description:
//         "Lerno is an AI-powered learning platform that personalizes education like never before. Dive into interactive lessons, real-time feedback, and hands-on exercises designed to enhance your understanding.",
//     },
//     {
//       title: "AI-Powered Tutor at Your Fingertips",
//       description:
//         "Get real-time, AI-driven explanations for any topic. Our intelligent tutor ensures you grasp concepts quickly and efficiently.",
//     },
//     {
//       title: "Engage with Interactive Visuals",
//       description:
//         "Learn through dynamic animations, visual breakdowns, and step-by-step guidance that make complex topics simple.",
//     },
//     {
//       title: "Your Learning, Your Way",
//       description:
//         "Adaptive learning paths customize content to match your pace, helping you focus on areas that need improvement.",
//     },
//     {
//       title: "Join a Thriving Learning Community",
//       description:
//         "Collaborate with peers, participate in discussions, and get expert guidance—all in one place.",
//     },
//     {
//       title: "Start Your Learning Journey Today!",
//       description:
//         "Thousands of learners are already unlocking their potential with Lerno. Don't miss out!",
//     },
//   ];

//   return (
//     <div className="bg-black">
//       <WavyBackground className="max-w-4xl mx-auto pb-40">
//         <p className="text-5xl text-white font-bold inter-var text-center">
//           Your AI Tutor, Anytime, Anywhere
//         </p>
//         <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
//           Adaptive lessons, intelligent recommendations, and seamless learning
//           at your fingertips.
//         </p>
//         <div className="flex justify-center mt-8">
//           <AceternityButton onClick={handleButtonClick}>
//             Get Started Now
//           </AceternityButton>
//         </div>
//       </WavyBackground>
//       <div className="flex flex-col overflow-hidden">
//         <ContainerScroll
//           titleComponent={
//             <>
//               <h1 className="text-4xl font-semibold text-white dark:text-white">
//                 Learn Smarter with Interactive AI <br />
//                 <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
//                   Try Lerno.ai Now
//                 </span>
//               </h1>
//             </>
//           }
//         >
//           <img
//             src="/src/assets/lerno01.png"
//             height={720}
//             width={1400}
//             className="mx-auto rounded-2xl object-cover h-full object-left-top"
//             alt="Lerno.ai Preview"
//           />
//         </ContainerScroll>
//       </div>
//       <h2 className="text-white text-center text-3xl font-bold">Features</h2>
//       <div className="max-w-7xl mx-auto px-8 py-10">
//         <HoverEffect items={projects} />
//       </div>
//     </div>
//   );
// };
// //Making the component

// export default LandingPage;

// import React, { useState, useEffect } from "react";
// import { WavyBackground } from "../ui/wavy-background";
// import { ContainerScroll } from "../ui/container-scroll-animation";
// import { HoverEffect } from "../ui/card-hover-effect";
// import { AceternityButton } from "../ui/aceternity-button";
// import { useNavigate } from "react-router-dom";
// import { ChevronDown, Globe } from "lucide-react";

// const LandingPage = () => {
//   const navigate = useNavigate();
//   const [currentLanguage, setCurrentLanguage] = useState("en");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isTranslating, setIsTranslating] = useState(false);

//   const languages = [
//     { code: "en", name: "English", flag: "🇺🇸" },
//     { code: "hi", name: "हिंदी", flag: "🇮🇳" },
//     { code: "ta", name: "தமிழ்", flag: "🇮🇳" },
//     { code: "bn", name: "বাংলা", flag: "🇮🇳" },
//   ];

//   const content = {
//     en: {
//       mainTitle: "Your AI Tutor, Anytime, Anywhere",
//       mainSubtitle:
//         "Adaptive lessons, intelligent recommendations, and seamless learning at your fingertips.",
//       getStartedBtn: "Get Started Now",
//       learnSmarterTitle: "Learn Smarter with Interactive AI",
//       tryNowTitle: "Try Lerno.ai Now",
//       featuresTitle: "Features",
//       projects: [
//         {
//           title: "Transform Learning with Lerno",
//           description:
//             "Lerno is an AI-powered learning platform that personalizes education like never before. Dive into interactive lessons, real-time feedback, and hands-on exercises designed to enhance your understanding.",
//         },
//         {
//           title: "AI-Powered Tutor at Your Fingertips",
//           description:
//             "Get real-time, AI-driven explanations for any topic. Our intelligent tutor ensures you grasp concepts quickly and efficiently.",
//         },
//         {
//           title: "Engage with Interactive Visuals",
//           description:
//             "Learn through dynamic animations, visual breakdowns, and step-by-step guidance that make complex topics simple.",
//         },
//         {
//           title: "Your Learning, Your Way",
//           description:
//             "Adaptive learning paths customize content to match your pace, helping you focus on areas that need improvement.",
//         },
//         {
//           title: "Join a Thriving Learning Community",
//           description:
//             "Collaborate with peers, participate in discussions, and get expert guidance—all in one place.",
//         },
//         {
//           title: "Start Your Learning Journey Today!",
//           description:
//             "Thousands of learners are already unlocking their potential with Lerno. Don't miss out!",
//         },
//       ],
//     },
//     hi: {
//       mainTitle: "आपका AI ट्यूटर, कभी भी, कहीं भी",
//       mainSubtitle:
//         "अनुकूलित पाठ, बुद्धिमान सिफारिशें, और आपकी उंगलियों पर निर्बाध शिक्षा।",
//       getStartedBtn: "अभी शुरू करें",
//       learnSmarterTitle: "इंटरैक्टिव AI के साथ स्मार्ट सीखें",
//       tryNowTitle: "अभी Lerno.ai आज़माएं",
//       featuresTitle: "विशेषताएं",
//       projects: [
//         {
//           title: "Lerno के साथ सीखने को बदलें",
//           description:
//             "Lerno एक AI-संचालित शिक्षा मंच है जो शिक्षा को पहले से कहीं अधिक व्यक्तिगत बनाता है। इंटरैक्टिव पाठ, वास्तविक समय की प्रतिक्रिया, और व्यावहारिक अभ्यास में गोता लगाएं।",
//         },
//         {
//           title: "आपकी उंगलियों पर AI-संचालित ट्यूटर",
//           description:
//             "किसी भी विषय के लिए वास्तविक समय, AI-संचालित स्पष्टीकरण प्राप्त करें। हमारा बुद्धिमान ट्यूटर सुनिश्चित करता है कि आप अवधारणाओं को जल्दी और कुशलता से समझें।",
//         },
//         {
//           title: "इंटरैक्टिव विज़ुअल के साथ जुड़ें",
//           description:
//             "गतिशील एनिमेशन, विज़ुअल ब्रेकडाउन, और चरण-दर-चरण मार्गदर्शन के माध्यम से सीखें जो जटिल विषयों को सरल बनाता है।",
//         },
//         {
//           title: "आपका सीखना, आपका तरीका",
//           description:
//             "अनुकूलित शिक्षा पथ आपकी गति के अनुसार सामग्री को अनुकूलित करते हैं, जिससे आप सुधार की आवश्यकता वाले क्षेत्रों पर ध्यान केंद्रित कर सकते हैं।",
//         },
//         {
//           title: "एक संपन्न शिक्षा समुदाय में शामिल हों",
//           description:
//             "साथियों के साथ सहयोग करें, चर्चाओं में भाग लें, और विशेषज्ञ मार्गदर्शन प्राप्त करें—सब एक जगह।",
//         },
//         {
//           title: "आज ही अपनी शिक्षा यात्रा शुरू करें!",
//           description:
//             "हजारों शिक्षार्थी पहले से ही Lerno के साथ अपनी क्षमता को अनलॉक कर रहे हैं। चूकें नहीं!",
//         },
//       ],
//     },
//     ta: {
//       mainTitle: "உங்கள் AI ஆசிரியர், எப்போதும், எங்கும்",
//       mainSubtitle:
//         "தகவமைக்கப்பட்ட பாடங்கள், அறிவார்ந்த பரிந்துரைகள், மற்றும் உங்கள் விரல் நுனியில் தடையற்ற கற்றல்.",
//       getStartedBtn: "இப்போதே தொடங்குங்கள்",
//       learnSmarterTitle:
//         "இண்டராக்டிவ் AI உடன் புத்திசாலித்தனமாக கற்றுக்கொள்ளுங்கள்",
//       tryNowTitle: "இப்போது Lerno.ai ஐ முயற்சிக்கவும்",
//       featuresTitle: "அம்சங்கள்",
//       projects: [
//         {
//           title: "Lerno உடன் கற்றலை மாற்றுங்கள்",
//           description:
//             "Lerno ஒரு AI-இயங்கும் கற்றல் தளமாகும், இது கல்வியை முன்னெப்போதும் இல்லாத வகையில் தனிப்பயனாக்குகிறது. ஊடாடும் பாடங்கள், நேரடி கருத்து, மற்றும் நடைமுறை பயிற்சிகளில் மூழ்குங்கள்.",
//         },
//         {
//           title: "உங்கள் விரல் நுனியில் AI-இயங்கும் ஆசிரியர்",
//           description:
//             "எந்த தலைப்புக்கும் நேரடி, AI-இயங்கும் விளக்கங்களைப் பெறுங்கள். எங்கள் அறிவார்ந்த ஆசிரியர் நீங்கள் கருத்துக்களை விரைவாகவும் திறமையாகவும் புரிந்து கொள்வதை உறுதி செய்கிறார்.",
//         },
//         {
//           title: "ஊடாடும் காட்சிகளுடன் ஈடுபடுங்கள்",
//           description:
//             "மாறும் அனிமேஷன்கள், காட்சி பிரிவுகள், மற்றும் படிகளின் வழிகாட்டுதல் மூலம் கற்றுக்கொள்ளுங்கள், இது சிக்கலான தலைப்புகளை எளிமையாக்குகிறது.",
//         },
//         {
//           title: "உங்கள் கற்றல், உங்கள் வழி",
//           description:
//             "தகவமைக்கப்பட்ட கற்றல் பாதைகள் உங்கள் வேகத்தில் உள்ளடக்கத்தை தனிப்பயனாக்குகின்றன, மேம்பாடு தேவைப்படும் பகுதிகளில் கவனம் செலுத்த உதவுகின்றன.",
//         },
//         {
//           title: "செழிப்பான கற்றல் சமூகத்தில் சேருங்கள்",
//           description:
//             "சக ஊழியர்களுடன் ஒத்துழைக்கவும், விவாதங்களில் பங்கேற்கவும், நிபுணர் வழிகாட்டுதலைப் பெறவும்—எல்லாம் ஒரே இடத்தில்.",
//         },
//         {
//           title: "இன்றே உங்கள் கற்றல் பயணத்தைத் தொடங்குங்கள்!",
//           description:
//             "ஆயிரக்கணக்கான கற்றுக்கொள்பவர்கள் ஏற்கனவே Lerno உடன் தங்கள் திறனை திறந்து கொண்டிருக்கிறார்கள். தவறவிடாதீர்கள்!",
//         },
//       ],
//     },
//     bn: {
//       mainTitle: "আপনার AI শিক্ষক, যেকোনো সময়, যেকোনো জায়গায়",
//       mainSubtitle:
//         "অভিযোজিত পাঠ, বুদ্ধিমান সুপারিশ, এবং আপনার হাতের মুঠোয় নিরবচ্ছিন্ন শিক্ষা।",
//       getStartedBtn: "এখনই শুরু করুন",
//       learnSmarterTitle: "ইন্টারঅ্যাক্টিভ AI দিয়ে স্মার্ট শিখুন",
//       tryNowTitle: "এখনই Lerno.ai চেষ্টা করুন",
//       featuresTitle: "বৈশিষ্ট্যসমূহ",
//       projects: [
//         {
//           title: "Lerno দিয়ে শিক্ষায় রূপান্তর আনুন",
//           description:
//             "Lerno একটি AI-চালিত শিক্ষা প্ল্যাটফর্ম যা শিক্ষাকে আগের চেয়ে আরও ব্যক্তিগত করে তোলে। ইন্টারঅ্যাক্টিভ পাঠ, রিয়েল-টাইম ফিডব্যাক, এবং হ্যান্ডস-অন অনুশীলনে ডুব দিন।",
//         },
//         {
//           title: "আপনার হাতের মুঠোয় AI-চালিত শিক্ষক",
//           description:
//             "যেকোনো বিষয়ের জন্য রিয়েল-টাইম, AI-চালিত ব্যাখ্যা পান। আমাদের বুদ্ধিমান শিক্ষক নিশ্চিত করে যে আপনি ধারণাগুলি দ্রুত এবং দক্ষতার সাথে বোঝেন।",
//         },
//         {
//           title: "ইন্টারঅ্যাক্টিভ ভিজ্যুয়াল দিয়ে জড়িত হন",
//           description:
//             "গতিশীল অ্যানিমেশন, ভিজ্যুয়াল ব্রেকডাউন, এবং ধাপে ধাপে গাইডেন্স দিয়ে শিখুন যা জটিল বিষয়গুলিকে সহজ করে তোলে।",
//         },
//         {
//           title: "আপনার শিক্ষা, আপনার পথ",
//           description:
//             "অভিযোজিত শিক্ষার পথ আপনার গতির সাথে মানানসই করে কন্টেন্ট কাস্টমাইজ করে, যা উন্নতির প্রয়োজন এমন ক্ষেত্রগুলিতে ফোকাস করতে সাহায্য করে।",
//         },
//         {
//           title: "একটি সমৃদ্ধ শিক্ষা সম্প্রদায়ে যোগ দিন",
//           description:
//             "সহকর্মীদের সাথে সহযোগিতা করুন, আলোচনায় অংশগ্রহণ করুন, এবং বিশেষজ্ঞ গাইডেন্স পান—সব এক জায়গায়।",
//         },
//         {
//           title: "আজই আপনার শিক্ষার যাত্রা শুরু করুন!",
//           description:
//             "হাজার হাজার শিক্ষার্থী ইতিমধ্যে Lerno দিয়ে তাদের সম্ভাবনা আনলক করছে। মিস করবেন না!",
//         },
//       ],
//     },
//   };

//   const handleButtonClick = () => {
//     navigate("/chat");
//     console.log("Navigate to chat page");
//   };

//   const handleLanguageChange = (langCode) => {
//     setCurrentLanguage(langCode);
//     setIsDropdownOpen(false);
//   };

//   const currentContent = content[currentLanguage];

//   return (
//     <div className="bg-black relative">
//       {/* Language Dropdown */}
//       <div className="absolute top-4 right-4 z-50">
//         <div className="relative">
//           <button
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 transition-colors duration-200"
//           >
//             <Globe className="w-4 h-4" />
//             <span className="text-sm font-medium">
//               {languages.find((lang) => lang.code === currentLanguage)?.flag}{" "}
//               {languages.find((lang) => lang.code === currentLanguage)?.name}
//             </span>
//             <ChevronDown
//               className={`w-4 h-4 transition-transform duration-200 ${
//                 isDropdownOpen ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           {isDropdownOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-600 overflow-hidden">
//               {languages.map((language) => (
//                 <button
//                   key={language.code}
//                   onClick={() => handleLanguageChange(language.code)}
//                   className={`w-full text-left px-4 py-3 hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-3 ${
//                     currentLanguage === language.code
//                       ? "bg-gray-700 text-blue-400"
//                       : "text-white"
//                   }`}
//                 >
//                   <span className="text-lg">{language.flag}</span>
//                   <span className="text-sm font-medium">{language.name}</span>
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Main Content */}
//       <WavyBackground className="max-w-4xl mx-auto pb-40">
//         <p className="text-5xl text-white font-bold inter-var text-center">
//           {currentContent.mainTitle}
//         </p>
//         <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
//           {currentContent.mainSubtitle}
//         </p>
//         <div className="flex justify-center mt-8">
//           <AceternityButton onClick={handleButtonClick}>
//             {currentContent.getStartedBtn}
//           </AceternityButton>
//         </div>
//       </WavyBackground>

//       <div className="flex flex-col overflow-hidden">
//         <ContainerScroll
//           titleComponent={
//             <>
//               <h1 className="text-4xl font-semibold text-white dark:text-white">
//                 {currentContent.learnSmarterTitle} <br />
//                 <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
//                   {currentContent.tryNowTitle}
//                 </span>
//               </h1>
//             </>
//           }
//         >
//           <img
//             src="/src/assets/lerno01.png"
//             height={720}
//             width={1400}
//             className="mx-auto rounded-2xl object-cover h-full object-left-top"
//             alt="Lerno.ai Preview"
//           />
//         </ContainerScroll>
//       </div>

//       <h2 className="text-white text-center text-3xl font-bold">
//         {currentContent.featuresTitle}
//       </h2>
//       <div className="max-w-7xl mx-auto px-8 py-10">
//         <HoverEffect items={currentContent.projects} />
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

"use client";

import { useState } from "react";
import { WavyBackground } from "../ui/wavy-background";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { HoverEffect } from "../ui/card-hover-effect";
import { AceternityButton } from "../ui/aceternity-button";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Globe,
  Star,
  Send,
  User,
  Mail,
  MessageSquare,
} from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  // Feedback form state
  const [feedbackForm, setFeedbackForm] = useState({
    name: "",
    email: "",
    rating: 0,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "hi", name: "हिंदी", flag: "🇮🇳" },
    { code: "ta", name: "தமிழ்", flag: "🇮🇳" },
    { code: "bn", name: "বাংলা", flag: "🇮🇳" },
  ];

  const content = {
    en: {
      mainTitle: "Your AI Tutor, Anytime, Anywhere",
      mainSubtitle:
        "Adaptive lessons, intelligent recommendations, and seamless learning at your fingertips.",
      getStartedBtn: "Get Started Now",
      learnSmarterTitle: "Learn Smarter with Interactive AI",
      tryNowTitle: "Try Lerno.ai Now",
      featuresTitle: "Features",
      feedbackTitle: "What Our Learners Say",
      feedbackSubtitle: "Share your experience and help us improve",
      feedbackForm: {
        nameLabel: "Your Name",
        namePlaceholder: "Enter your full name",
        emailLabel: "Email Address",
        emailPlaceholder: "Enter your email",
        ratingLabel: "Rate Your Experience",
        messageLabel: "Your Feedback",
        messagePlaceholder: "Tell us about your experience with Lerno.ai...",
        submitBtn: "Submit Feedback",
        submittingBtn: "Submitting...",
        successMessage:
          "Thank you for your feedback! We appreciate your input.",
        errorMessage: "Please fill in all required fields.",
      },
      projects: [
        {
          title: "Transform Learning with Lerno",
          description:
            "Lerno is an AI-powered learning platform that personalizes education like never before. Dive into interactive lessons, real-time feedback, and hands-on exercises designed to enhance your understanding.",
        },
        {
          title: "AI-Powered Tutor at Your Fingertips",
          description:
            "Get real-time, AI-driven explanations for any topic. Our intelligent tutor ensures you grasp concepts quickly and efficiently.",
        },
        {
          title: "Engage with Interactive Visuals",
          description:
            "Learn through dynamic animations, visual breakdowns, and step-by-step guidance that make complex topics simple.",
        },
        {
          title: "Your Learning, Your Way",
          description:
            "Adaptive learning paths customize content to match your pace, helping you focus on areas that need improvement.",
        },
        {
          title: "Join a Thriving Learning Community",
          description:
            "Collaborate with peers, participate in discussions, and get expert guidance—all in one place.",
        },
        {
          title: "Start Your Learning Journey Today!",
          description:
            "Thousands of learners are already unlocking their potential with Lerno. Don't miss out!",
        },
      ],
    },
    hi: {
      mainTitle: "आपका AI ट्यूटर, कभी भी, कहीं भी",
      mainSubtitle:
        "अनुकूलित पाठ, बुद्धिमान सिफारिशें, और आपकी उंगलियों पर निर्बाध शिक्षा।",
      getStartedBtn: "अभी शुरू करें",
      learnSmarterTitle: "इंटरैक्टिव AI के साथ स्मार्ट सीखें",
      tryNowTitle: "अभी Lerno.ai आज़माएं",
      featuresTitle: "विशेषताएं",
      feedbackTitle: "हमारे शिक्षार्थी क्या कहते हैं",
      feedbackSubtitle: "अपना अनुभव साझा करें और हमें बेहतर बनाने में मदद करें",
      feedbackForm: {
        nameLabel: "आपका नाम",
        namePlaceholder: "अपना पूरा नाम दर्ज करें",
        emailLabel: "ईमेल पता",
        emailPlaceholder: "अपना ईमेल दर्ज करें",
        ratingLabel: "अपने अनुभव को रेट करें",
        messageLabel: "आपकी प्रतिक्रिया",
        messagePlaceholder: "Lerno.ai के साथ अपने अनुभव के बारे में बताएं...",
        submitBtn: "प्रतिक्रिया भेजें",
        submittingBtn: "भेजा जा रहा है...",
        successMessage:
          "आपकी प्रतिक्रिया के लिए धन्यवाद! हम आपके इनपुट की सराहना करते हैं।",
        errorMessage: "कृपया सभी आवश्यक फ़ील्ड भरें।",
      },
      projects: [
        {
          title: "Lerno के साथ सीखने को बदलें",
          description:
            "Lerno एक AI-संचालित शिक्षा मंच है जो शिक्षा को पहले से कहीं अधिक व्यक्तिगत बनाता है। इंटरैक्टिव पाठ, वास्तविक समय की प्रतिक्रिया, और व्यावहारिक अभ्यास में गोता लगाएं।",
        },
        {
          title: "आपकी उंगलियों पर AI-संचालित ट्यूटर",
          description:
            "किसी भी विषय के लिए वास्तविक समय, AI-संचालित स्पष्टीकरण प्राप्त करें। हमारा बुद्धिमान ट्यूटर सुनिश्चित करता है कि आप अवधारणाओं को जल्दी और कुशलता से समझें।",
        },
        {
          title: "इंटरैक्टिव विज़ुअल के साथ जुड़ें",
          description:
            "गतिशील एनिमेशन, विज़ुअल ब्रेकडाउन, और चरण-दर-चरण मार्गदर्शन के माध्यम से सीखें जो जटिल विषयों को सरल बनाता है।",
        },
        {
          title: "आपका सीखना, आपका तरीका",
          description:
            "अनुकूलित शिक्षा पथ आपकी गति के अनुसार सामग्री को अनुकूलित करते हैं, जिससे आप सुधार की आवश्यकता वाले क्षेत्रों पर ध्यान केंद्रित कर सकते हैं।",
        },
        {
          title: "एक संपन्न शिक्षा समुदाय में शामिल हों",
          description:
            "साथियों के साथ सहयोग करें, चर्चाओं में भाग लें, और विशेषज्ञ मार्गदर्शन प्राप्त करें—सब एक जगह।",
        },
        {
          title: "आज ही अपनी शिक्षा यात्रा शुरू करें!",
          description:
            "हजारों शिक्षार्थी पहले से ही Lerno के साथ अपनी क्षमता को अनलॉक कर रहे हैं। चूकें नहीं!",
        },
      ],
    },
    ta: {
      mainTitle: "உங்கள் AI ஆசிரியர், எப்போதும், எங்கும்",
      mainSubtitle:
        "தகவமைக்கப்பட்ட பாடங்கள், அறிவார்ந்த பரிந்துரைகள், மற்றும் உங்கள் விரல் நுனியில் தடையற்ற கற்றல்.",
      getStartedBtn: "இப்போதே தொடங்குங்கள்",
      learnSmarterTitle:
        "இண்டராக்டிவ் AI உடன் புத்திசாலித்தனமாக கற்றுக்கொள்ளுங்கள்",
      tryNowTitle: "இப்போது Lerno.ai ஐ முயற்சிக்கவும்",
      featuresTitle: "அம்சங்கள்",
      feedbackTitle: "எங்கள் கற்றுக்கொள்பவர்கள் என்ன சொல்கிறார்கள்",
      feedbackSubtitle:
        "உங்கள் அனுபவத்தைப் பகிர்ந்து எங்களை மேம்படுத்த உதவுங்கள்",
      feedbackForm: {
        nameLabel: "உங்கள் பெயர்",
        namePlaceholder: "உங்கள் முழு பெயரை உள்ளிடவும்",
        emailLabel: "மின்னஞ்சல் முகவரி",
        emailPlaceholder: "உங்கள் மின்னஞ்சலை உள்ளிடவும்",
        ratingLabel: "உங்கள் அனுபவத்தை மதிப்பிடுங்கள்",
        messageLabel: "உங்கள் கருத்து",
        messagePlaceholder:
          "Lerno.ai உடனான உங்கள் அனுபவத்தைப் பற்றி சொல்லுங்கள்...",
        submitBtn: "கருத்தை அனுப்பவும்",
        submittingBtn: "அனுப்பப்படுகிறது...",
        successMessage:
          "உங்கள் கருத்துக்கு நன்றி! உங்கள் உள்ளீட்டை நாங்கள் பாராட்டுகிறோம்।",
        errorMessage: "தயவுசெய்து அனைத்து தேவையான புலங்களையும் நிரப்பவும்।",
      },
      projects: [
        {
          title: "Lerno உடன் கற்றலை மாற்றுங்கள்",
          description:
            "Lerno ஒரு AI-இயங்கும் கற்றல் தளமாகும், இது கல்வியை முன்னெப்போதும் இல்லாத வகையில் தனிப்பயனாக்குகிறது. ஊடாடும் பாடங்கள், நேரடி கருத்து, மற்றும் நடைமுறை பயிற்சிகளில் மூழ்குங்கள்.",
        },
        {
          title: "உங்கள் விரல் நுனியில் AI-இயங்கும் ஆசிரியர்",
          description:
            "எந்த தலைப்புக்கும் நேரடி, AI-இயங்கும் விளக்கங்களைப் பெறுங்கள். எங்கள் அறிவார்ந்த ஆசிரியர் நீங்கள் கருத்துக்களை விரைவாகவும் திறமையாகவும் புரிந்து கொள்வதை உறுதி செய்கிறார்.",
        },
        {
          title: "ஊடாடும் காட்சிகளுடன் ஈடுபடுங்கள்",
          description:
            "மாறும் அனிமேஷன்கள், காட்சி பிரிவுகள், மற்றும் படிகளின் வழிகாட்டுதல் மூலம் கற்றுக்கொள்ளுங்கள், இது சிக்கலான தலைப்புகளை எளிமையாக்குகிறது.",
        },
        {
          title: "உங்கள் கற்றல், உங்கள் வழி",
          description:
            "தகவமைக்கப்பட்ட கற்றல் பாதைகள் உங்கள் வேகத்தில் உள்ளடக்கத்தை தனிப்பயனாக்குகின்றன, மேம்பாடு தேவைப்படும் பகுதிகளில் கவனம் செலுத்த உதவுகின்றன.",
        },
        {
          title: "செழிப்பான கற்றல் சமூகத்தில் சேருங்கள்",
          description:
            "சக ஊழியர்களுடன் ஒத்துழைக்கவும், விவாதங்களில் பங்கேற்கவும், நிபுணர் வழிகாட்டுதலைப் பெறவும்—எல்லாம் ஒரே இடத்தில்.",
        },
        {
          title: "இன்றே உங்கள் கற்றல் பயணத்தைத் தொடங்குங்கள்!",
          description:
            "ஆயிரக்கணக்கான கற்றுக்கொள்பவர்கள் ஏற்கனவே Lerno உடன் தங்கள் திறனை திறந்து கொண்டிருக்கிறார்கள். தவறவிடாதீர்கள்!",
        },
      ],
    },
    bn: {
      mainTitle: "আপনার AI শিক্ষক, যেকোনো সময়, যেকোনো জায়গায়",
      mainSubtitle:
        "অভিযোজিত পাঠ, বুদ্ধিমান সুপারিশ, এবং আপনার হাতের মুঠোয় নিরবচ্ছিন্ন শিক্ষা।",
      getStartedBtn: "এখনই শুরু করুন",
      learnSmarterTitle: "ইন্টারঅ্যাক্টিভ AI দিয়ে স্মার্ট শিখুন",
      tryNowTitle: "এখনই Lerno.ai চেষ্টা করুন",
      featuresTitle: "বৈশিষ্ট্যসমূহ",
      feedbackTitle: "আমাদের শিক্ষার্থীরা কী বলেন",
      feedbackSubtitle:
        "আপনার অভিজ্ঞতা শেয়ার করুন এবং আমাদের উন্নতি করতে সাহায্য করুন",
      feedbackForm: {
        nameLabel: "আপনার নাম",
        namePlaceholder: "আপনার পূর্ণ নাম লিখুন",
        emailLabel: "ইমেইল ঠিকানা",
        emailPlaceholder: "আপনার ইমেইল লিখুন",
        ratingLabel: "আপনার অভিজ্ঞতা রেট করুন",
        messageLabel: "আপনার মতামত",
        messagePlaceholder: "Lerno.ai এর সাথে আপনার অভিজ্ঞতা সম্পর্কে বলুন...",
        submitBtn: "মতামত পাঠান",
        submittingBtn: "পাঠানো হচ্ছে...",
        successMessage:
          "আপনার মতামতের জন্য ধন্যবাদ! আমরা আপনার ইনপুট প্রশংসা করি।",
        errorMessage: "দয়া করে সমস্ত প্রয়োজনীয় ক্ষেত্র পূরণ করুন।",
      },
      projects: [
        {
          title: "Lerno দিয়ে শিক্ষায় রূপান্তর আনুন",
          description:
            "Lerno একটি AI-চালিত শিক্ষা প্ল্যাটফর্ম যা শিক্ষাকে আগের চেয়ে আরও ব্যক্তিগত করে তোলে। ইন্টারঅ্যাক্টিভ পাঠ, রিয়েল-টাইম ফিডব্যাক, এবং হ্যান্ডস-অন অনুশীলনে ডুব দিন।",
        },
        {
          title: "আপনার হাতের মুঠোয় AI-চালিত শিক্ষক",
          description:
            "যেকোনো বিষয়ের জন্য রিয়েল-টাইম, AI-চালিত ব্যাখ্যা পান। আমাদের বুদ্ধিমান শিক্ষক নিশ্চিত করে যে আপনি ধারণাগুলি দ্রুত এবং দক্ষতার সাথে বোঝেন।",
        },
        {
          title: "ইন্টারঅ্যাক্টিভ ভিজ্যুয়াল দিয়ে জড়িত হন",
          description:
            "গতিশীল অ্যানিমেশন, ভিজ্যুয়াল ব্রেকডাউন, এবং ধাপে ধাপে গাইডেন্স দিয়ে শিখুন যা জটিল বিষয়গুলিকে সহজ করে তোলে।",
        },
        {
          title: "আপনার শিক্ষা, আপনার পথ",
          description:
            "অভিযোজিত শিক্ষার পথ আপনার গতির সাথে মানানসই করে কন্টেন্ট কাস্টমাইজ করে, যা উন্নতির প্রয়োজন এমন ক্ষেত্রগুলিতে ফোকাস করতে সাহায্য করে।",
        },
        {
          title: "একটি সমৃদ্ধ শিক্ষা সম্প্রদায়ে যোগ দিন",
          description:
            "সহকর্মীদের সাথে সহযোগিতা করুন, আলোচনায় অংশগ্রহণ করুন, এবং বিশেষজ্ঞ গাইডেন্স পান—সব এক জায়গায়।",
        },
        {
          title: "আজই আপনার শিক্ষার যাত্রা শুরু করুন!",
          description:
            "হাজার হাজার শিক্ষার্থী ইতিমধ্যে Lerno দিয়ে তাদের সম্ভাবনা আনলক করছে। মিস করবেন না!",
        },
      ],
    },
  };

  const handleButtonClick = () => {
    navigate("/chat");
    console.log("Navigate to chat page");
  };

  const handleLanguageChange = (langCode) => {
    setCurrentLanguage(langCode);
    setIsDropdownOpen(false);
  };

  const handleFeedbackChange = (field, value) => {
    setFeedbackForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleStarClick = (rating) => {
    setFeedbackForm((prev) => ({
      ...prev,
      rating: rating,
    }));
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();

    if (
      !feedbackForm.name ||
      !feedbackForm.email ||
      !feedbackForm.rating ||
      !feedbackForm.message
    ) {
      alert(currentContent.feedbackForm.errorMessage);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFeedbackForm({
        name: "",
        email: "",
        rating: 0,
        message: "",
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 2000);
  };

  const currentContent = content[currentLanguage];

  return (
    <div className="bg-black relative">
      {/* Language Dropdown */}
      <div className="absolute top-4 right-4 z-50">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 transition-colors duration-200"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">
              {languages.find((lang) => lang.code === currentLanguage)?.flag}{" "}
              {languages.find((lang) => lang.code === currentLanguage)?.name}
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-600 overflow-hidden">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-3 ${
                    currentLanguage === language.code
                      ? "bg-gray-700 text-blue-400"
                      : "text-white"
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="text-sm font-medium">{language.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-5xl text-white font-bold inter-var text-center">
          {currentContent.mainTitle}
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          {currentContent.mainSubtitle}
        </p>
        <div className="flex justify-center mt-8">
          <AceternityButton onClick={handleButtonClick}>
            {currentContent.getStartedBtn}
          </AceternityButton>
        </div>
      </WavyBackground>

      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-white dark:text-white">
                {currentContent.learnSmarterTitle} <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  {currentContent.tryNowTitle}
                </span>
              </h1>
            </>
          }
        >
          <img
            src="/src/assets/lerno01.png"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            alt="Lerno.ai Preview"
          />
        </ContainerScroll>
      </div>

      <h2 className="text-white text-center text-3xl font-bold">
        {currentContent.featuresTitle}
      </h2>
      <div className="max-w-7xl mx-auto px-8 py-10">
        <HoverEffect items={currentContent.projects} />
      </div>

      {/* Customer Feedback Form Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {currentContent.feedbackTitle}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {currentContent.feedbackSubtitle}
            </p>
          </div>

          {submitSuccess && (
            <div className="mb-8 p-4 bg-green-900/30 border border-green-500/50 rounded-lg text-green-300 text-center">
              {currentContent.feedbackForm.successMessage}
            </div>
          )}

          <div className="relative">
            {/* Glassmorphism background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 rounded-3xl backdrop-blur-sm border border-white/10"></div>

            <form
              onSubmit={handleFeedbackSubmit}
              className="relative p-8 md:p-12 space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Name Field */}
                <div className="space-y-3">
                  <label className="flex items-center text-white font-medium text-sm">
                    <User className="w-4 h-4 mr-2 text-blue-400" />
                    {currentContent.feedbackForm.nameLabel}
                  </label>
                  <input
                    type="text"
                    value={feedbackForm.name}
                    onChange={(e) =>
                      handleFeedbackChange("name", e.target.value)
                    }
                    placeholder={currentContent.feedbackForm.namePlaceholder}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-3">
                  <label className="flex items-center text-white font-medium text-sm">
                    <Mail className="w-4 h-4 mr-2 text-blue-400" />
                    {currentContent.feedbackForm.emailLabel}
                  </label>
                  <input
                    type="email"
                    value={feedbackForm.email}
                    onChange={(e) =>
                      handleFeedbackChange("email", e.target.value)
                    }
                    placeholder={currentContent.feedbackForm.emailPlaceholder}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Rating Field */}
              <div className="space-y-4">
                <label className="flex items-center text-white font-medium text-sm">
                  <Star className="w-4 h-4 mr-2 text-blue-400" />
                  {currentContent.feedbackForm.ratingLabel}
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleStarClick(star)}
                      className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                        star <= feedbackForm.rating
                          ? "text-yellow-400"
                          : "text-gray-500 hover:text-yellow-300"
                      }`}
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= feedbackForm.rating ? "fill-current" : ""
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-3">
                <label className="flex items-center text-white font-medium text-sm">
                  <MessageSquare className="w-4 h-4 mr-2 text-blue-400" />
                  {currentContent.feedbackForm.messageLabel}
                </label>
                <textarea
                  value={feedbackForm.message}
                  onChange={(e) =>
                    handleFeedbackChange("message", e.target.value)
                  }
                  placeholder={currentContent.feedbackForm.messagePlaceholder}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    flex items-center space-x-2 px-8 py-4 rounded-lg font-medium text-white
                    transition-all duration-200 transform hover:scale-105
                    ${
                      isSubmitting
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
                    }
                  `}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>{currentContent.feedbackForm.submittingBtn}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{currentContent.feedbackForm.submitBtn}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
