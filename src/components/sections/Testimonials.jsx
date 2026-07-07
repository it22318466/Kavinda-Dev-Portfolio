import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, X, Send } from "lucide-react";
import { testimonials as defaultTestimonials } from "../../data/testimonials";
import FadeIn from "../animations/FadeIn";
import {
  addTestimonial,
  deleteTestimonial,
  subscribeToTestimonials,
} from "../../utils/firebase";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [isFirebaseConfigured, setIsFirebaseConfigured] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    quote: "",
    rating: 5,
    image: null,
    customStatValue: "",
    customStatLabel: "",
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });

  // Subscribe to Firebase testimonials on component mount
  useEffect(() => {
    const unsubscribe = subscribeToTestimonials((firebaseTestimonials) => {
      if (firebaseTestimonials.length > 0) {
        // Combine Firebase testimonials with default ones
        // Firebase testimonials come first (newest)
        const combined = [...firebaseTestimonials, ...defaultTestimonials];
        setTestimonials(combined);
        setIsFirebaseConfigured(true);
      } else {
        // No Firebase testimonials yet, use defaults
        setTestimonials(defaultTestimonials);
        setIsFirebaseConfigured(true);
      }
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.match("image.*")) {
        setFormStatus({
          type: "error",
          message: "Please upload an image file",
        });
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setFormStatus({
          type: "error",
          message: "Image size must be less than 5MB",
        });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
        setImagePreview(reader.result);
        // Clear any previous error status
        setFormStatus({ type: "", message: "" });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setFormData({ ...formData, image: null });
    setImagePreview(null);
  };

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmitTestimonial = async (e) => {
    e.preventDefault();

    // Check if Firebase is configured
    if (!isFirebaseConfigured) {
      setFormStatus({
        type: "error",
        message: "Firebase not configured. Please check environment variables.",
      });
      return;
    }

    // Validation
    if (
      !formData.name ||
      !formData.role ||
      !formData.company ||
      !formData.quote
    ) {
      setFormStatus({ type: "error", message: "Please fill in all fields" });
      return;
    }

    if (formData.quote.length < 20) {
      setFormStatus({
        type: "error",
        message:
          "Please provide a more detailed testimonial (at least 20 characters)",
      });
      return;
    }

    setFormStatus({ type: "loading", message: "Submitting testimonial..." });

    try {
      // Create new testimonial
      const newTestimonial = {
        name: formData.name,
        role: formData.role,
        company: formData.company,
        image: formData.image || "/images/testimonials/default_user.png",
        quote: formData.quote,
        rating: formData.rating,
        customStat:
          formData.customStatValue && formData.customStatLabel
            ? {
                value: formData.customStatValue,
                label: formData.customStatLabel,
              }
            : null,
        isUserSubmitted: true,
        createdAt: Date.now(),
      };

      // Save to Firebase
      await addTestimonial(newTestimonial);

      // Reset form
      setFormData({
        name: "",
        role: "",
        company: "",
        quote: "",
        rating: 5,
        image: null,
        customStatValue: "",
        customStatLabel: "",
      });
      setImagePreview(null);
      setShowForm(false);
      setFormStatus({
        type: "success",
        message: "Thank you for your testimonial!",
      });

      setTimeout(() => setFormStatus({ type: "", message: "" }), 5000);
    } catch (error) {
      console.error("Error submitting testimonial:", error);
      setFormStatus({
        type: "error",
        message: "Failed to submit testimonial. Please try again.",
      });
    }
  };

  const handleDeleteTestimonial = async (testimonialId) => {
    try {
      await deleteTestimonial(testimonialId);
      // Firebase will automatically update the testimonials via the subscription
    } catch (error) {
      console.error("Error deleting testimonial:", error);
      setFormStatus({
        type: "error",
        message: "Failed to delete testimonial. Please try again.",
      });
    }
  };

  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  const nextTestimonial = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    scrollToIndex(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    scrollToIndex(newIndex);
  };

  const testimonialStats = [
    { value: "3x", label: "Faster Delivery" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "100%", label: "On Time Delivery" },
    { value: "7 ★", label: "Average Rating" },
    { value: "170+", label: "Projects Completed" },
    { value: "6+", label: "Years Experience" },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-20 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 opacity-90 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6 hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-110">
              <Quote className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium tracking-winder uppercase">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4 max-w-2xl mx-auto">
              Trusted by forward thinking teams
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto">
              Empowering clients with design driven, high quality solutions
              built for success.
            </p>
          </div>
        </FadeIn>

        {/* Add Testimonial Button */}
        <FadeIn delay={50}>
          <div className="text-center mb-8">
            <button
              onClick={() => {
                if (!isFirebaseConfigured) {
                  setFormStatus({
                    type: "error",
                    message:
                      "Firebase not configured. Testimonial submission is disabled.",
                  });
                  return;
                }
                setShowForm(!showForm);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <Send className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                {showForm ? "Cancel" : "Add Your Testimonial"}
              </span>
            </button>
          </div>
        </FadeIn>

        {/* Testimonial Submission Form */}
        {showForm && (
          <FadeIn delay={100}>
            <div className="max-w-2xl mx-auto mb-12">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative">
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <h3 className="text-2xl font-semibold text-white mb-2">
                  Share Your Experience
                </h3>
                <p className="text-white/60 text-sm mb-6">
                  Tell others about your experience working with me
                </p>

                <form onSubmit={handleSubmitTestimonial} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Your Role *
                      </label>
                      <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                        placeholder="Project Manager"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                      placeholder="Your Company"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Rating *
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingChange(star)}
                          className="cursor-pointer transition-transform hover:scale-110"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= formData.rating
                                ? "fill-primary text-primary"
                                : "text-white/30"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Image Upload Section */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Your Photo (Optional)
                    </label>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <input
                          type="file"
                          id="image-upload"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                        <label
                          htmlFor="image-upload"
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white/70 hover:bg-white/10 hover:border-primary/30 transition-all duration-300 cursor-pointer text-sm"
                        >
                          Choose Image
                        </label>
                        <span className="text-white/40 text-sm">
                          {imagePreview
                            ? formData.image?.substring(0, 30) + "..."
                            : "No file chosen"}
                        </span>
                      </div>

                      {imagePreview && (
                        <div className="relative inline-block">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-24 h-24 object-cover rounded-xl border-2 border-primary/30"
                          />
                          <button
                            type="button"
                            onClick={handleRemoveImage}
                            className="absolute -top-2 -right-2 p-1 bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer"
                          >
                            <X className="w-3 h-3 text-white" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Custom Testimonial Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Custom Stat Value (Optional)
                      </label>
                      <input
                        type="text"
                        name="customStatValue"
                        value={formData.customStatValue}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                        placeholder="e.g., 5x, 100%, 50+"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Custom Stat Label (Optional)
                      </label>
                      <input
                        type="text"
                        name="customStatLabel"
                        value={formData.customStatLabel}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                        placeholder="e.g., Faster Delivery, Satisfaction"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Your Testimonial *
                    </label>
                    <textarea
                      name="quote"
                      value={formData.quote}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none"
                      placeholder="Share your experience working with me..."
                      required
                      minLength="20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Testimonial</span>
                  </button>

                  {formStatus.message && (
                    <div
                      className={`p-4 rounded-xl ${
                        formStatus.type === "success"
                          ? "bg-green-500/10 border border-green-500/20 text-green-400"
                          : formStatus.type === "loading"
                            ? "bg-blue-500/10 border border-blue-500/20 text-blue-400"
                            : "bg-red-500/10 border border-red-500/20 text-red-400"
                      }`}
                    >
                      {formStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Success Message */}
        {formStatus.type === "success" && !showForm && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full">
              <span className="text-green-400 text-sm font-medium">
                {formStatus.message}
              </span>
            </div>
          </div>
        )}

        <FadeIn delay={100}>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="overflow-x-hidden scroll-smooth"
              style={{ scrollSnapType: "x mandatory" }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="w-full shrink-0 px-4"
                    style={{ scrollSnapAlign: "start" }}
                  >
                    <div className="max-w-4xl mx-auto">
                      <div className="flex flex-col md:flex-row gap-6 items-stretch">
                        {/* Image Section */}
                        <div className="relative w-full md:w-1/3">
                          <div className="relative h-72 rounded-2xl overflow-hidden">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                            />

                            {/* Stat Badge Overlay */}
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="bg-black/60 p-4 rounded-xl shadow-lg hover:bg-[red]/10 hover:border-primary/80 transition-all duration-300 hover:scale-103">
                                <div className="">
                                  <div className="text-2xl font-semibold text-primary mb-1">
                                    {testimonial.customStat?.value ||
                                      testimonialStats[
                                        index % testimonialStats.length
                                      ]?.value}
                                  </div>
                                  <div className="text-sm font-semibold text-gray-100">
                                    {testimonial.customStat?.label ||
                                      testimonialStats[
                                        index % testimonialStats.length
                                      ]?.label}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Delete Button for User Submitted Testimonials */}
                            {testimonial.isUserSubmitted && (
                              <button
                                onClick={() => {
                                  if (!isFirebaseConfigured) {
                                    setFormStatus({
                                      type: "error",
                                      message:
                                        "Firebase not configured. Cannot delete testimonials.",
                                    });
                                    return;
                                  }
                                  handleDeleteTestimonial(testimonial.id);
                                }}
                                className="absolute top-3 right-3 p-2 bg-red-500/20 border border-red-500/50 rounded-full hover:bg-red-500/40 transition-all duration-300 cursor-pointer"
                                title="Delete testimonial"
                              >
                                <X className="w-2.5 h-2.5 text-red-400" />
                              </button>
                            )}
                          </div>
                        </div>

                        <div className="flex-1 flex flex-col justify-between py-4">
                          {/* Quotes */}
                          <div className="mb-6">
                            <Quote className="w-7 h-7 text-primary mb-4 opacity-50" />
                            <p className="text-lg md:text-md text-white leading-relaxed">
                              {testimonial.quote}
                            </p>
                          </div>

                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-white font-semibold mb-1">
                                {testimonial.name}
                              </div>
                              <div className="text-white/60 text-sm">
                                {testimonial.role}, {testimonial.company}
                              </div>
                            </div>

                            <div className="flex gap-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-primary text-primary hover:scale-120"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`transition-all duration-300 rounded-full cursor-pointer hover:scale-120 ${
                    index === currentIndex
                      ? "bg-white w-6 h-2"
                      : "bg-white/30 w-2 h-2 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={prevTestimonial}
              className="flex absolute right-283 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110 z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextTestimonial}
              className="flex absolute right-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 cursor-pointer hover:scale-110 z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonials;
