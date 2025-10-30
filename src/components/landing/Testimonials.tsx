import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

export const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials: Testimonial[] = t("testimonials.items", {
    returnObjects: true,
  }).map((item: Omit<Testimonial, "avatar">) => ({
    ...item,
    avatar: item.name
      .split(" ")
      .map((n) => n[0])
      .join(""),
  }));

  const plugin = React.useRef(
    Autoplay({ delay: 12000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            {t("testimonials.subtitle")}
          </p>
        </div>
        <Carousel
          opts={{ loop: true }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full max-w-6xl mx-auto touch-pan-y"
        >
          <CarouselContent className="-ms-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="ps-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col">
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center flex-grow">
                      <p className="text-lg italic mb-6 flex-grow">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 me-4">
                          <AvatarImage
                            src={`https://api.dicebear.com/8.x/initials/svg?seed=${testimonial.name}`}
                          />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};