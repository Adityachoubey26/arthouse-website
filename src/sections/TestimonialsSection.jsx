import SectionHeading from '../components/SectionHeading.jsx';
import TestimonialSlider from '../components/TestimonialSlider.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative bg-[#050810] overflow-hidden">
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[800px] h-[400px] bg-teal/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative">
        <SectionHeading
          label="Voices of Satisfaction"
          title="The Collector's Circle"
          subtitle="Join our community of over 500 discerning clients who have entrusted their most personal spaces to our artisanal mastery."
          center
        />
        <div className="mt-16 max-w-4xl mx-auto">
          <ScrollReveal>
            <TestimonialSlider />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
