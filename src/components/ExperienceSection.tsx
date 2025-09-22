import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin, Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-accent font-mono">
            PROFESSIONAL JOURNEY
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="text-accent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience and contributions in cutting-edge technology and research.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-xl text-primary">
                    Samsung R&D Institute India, Bangalore
                  </CardTitle>
                  <h3 className="text-lg font-semibold text-foreground">
                    Samsung Prism R&D Intern
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      March 2025 - Present
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Remote, India
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Briefcase className="w-3 h-3" />
                  Internship
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Key Responsibilities</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    Built a multimodal deepfake detector using Swin-v2 and HuBERT with cross-attention, achieving 94%+ accuracy.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    Applied Grad-CAM, FFT, and contrastive learning for interpretable detection of audio-visual forgeries.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    Extracted rPPG pulse, blink rate, and GAN fingerprints to capture physiological and spectral anomalies.
                  </li>
                </ul>
              </div>

              <div className="bg-secondary/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-foreground">Featured Project</h4>
                <h5 className="text-primary font-medium mb-2">DeepFake Audio-Video Detection</h5>
                <p className="text-sm text-muted-foreground mb-3">
                  Technologies: Python, PyTorch, Swin Transformers, Wav2Vec2, EfficientNet, OpenCV
                </p>
                <p className="text-sm text-muted-foreground">
                  Extracted multimodal features via facial landmarks, rPPG signals, blink metrics, 
                  and Wav2Vec2/HuBERT acoustic embeddings for advanced deepfake detection.
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {["Python", "PyTorch", "TensorFlow", "Swin Transformers", "HuBERT", "OpenCV", "Grad-CAM", "FFT"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center p-6 shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-2">94%+</div>
              <div className="text-sm text-muted-foreground">Detection Accuracy</div>
            </Card>
            <Card className="text-center p-6 shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-2">5+</div>
              <div className="text-sm text-muted-foreground">AI Models Implemented</div>
            </Card>
            <Card className="text-center p-6 shadow-card hover:shadow-elegant transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-2">Research</div>
              <div className="text-sm text-muted-foreground">Publication Ready</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;