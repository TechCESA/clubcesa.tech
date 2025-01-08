'use client'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import  ManagementProfile  from "@/actions/Teams/Management"
import TechnicalProfile from "@/actions/Teams/Technical"
import MarketingProfile from "@/actions/Teams/Marketing"
import PublicRelationProfile from "@/actions/Teams/PR"
import CreativeProfile from "@/actions/Teams/Creative"
import PhotographyProfile from "@/actions/Teams/Photography"
import DigitalProfile from "@/actions/Teams/Digital"
import SportsProfile from "@/actions/Teams/Sports"

export function SlideComponent() {
  return (
    <main className='flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-12'>
      <section className='text-center mb-8 md:mb-12'>
        <h1 className='text-3xl md:text-5xl font-bold'>Our Members</h1>
      </section>

      {/* Management Team */}

      <p className='text-xl md:text-2xl font-bold p-8'>Management Team</p>
      <Carousel 
      plugins={[Autoplay({delay: 2000 , stopOnMouseEnter:true, stopOnInteraction:false})]}
      className="w-full max-w-sm"
      >
      <CarouselContent>
        {
          ManagementProfile.map((message,index) => (
            <CarouselItem key={index} >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="flex flex-col text-center">
                    <img 
                      src={message.Image} 
                      alt={`${message.Name}'s Profile`} 
                      className="w-50 h-50 item-center mb-4" 
                    />
                    <span className="text-lg font-semibold">
                      {message.Name}
                    </span>
                    <span className="text-lg font-semibold ">
                      {message.Designation}
                    </span>
                    <div className="flex justify-center mt-4 space-x-8">
                      {/* Instagram */}
                      <a 
                        href={message.Instagram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                         src="/instagramicon.png" 
                         alt="Instagram" 
                         className="w-8 h-8"
                       />
                     </a>
                      {/* LinkedIn */}
                      <a 
                        href={message.LinkedIN} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                        src="/Linkedinlogo.png" 
                        alt="LinkedIn" 
                        className="w-8 h-8"
                       />
                     </a>
                     {/* Twitter */}
                     <a 
                        href={message.X} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                        src="/Twitterlogo.jpg" 
                        alt="X" 
                        className="w-8 h-8"
                       />
                     </a>
                   </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    {/* Technical Team */}

    <p className='text-xl md:text-2xl font-bold p-12'>Technical Team</p>
      <Carousel 
      plugins={[Autoplay({delay: 2000 , stopOnMouseEnter:true, stopOnInteraction:false})]}
      className="w-full"
      >
      <CarouselContent>
        {
          TechnicalProfile.map((message,index) => (
            <CarouselItem key={index}  className="lg:basis-1/3 md:basis-1/2 basis-1/1">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="flex flex-col text-center">
                    <img 
                      src={message.Image} 
                      alt={`${message.Name}'s Profile`} 
                      className="w-50 h-50 item-center mb-4" 
                    />
                    <span className="text-lg font-semibold">
                      {message.Name}
                    </span>
                    <span className="text-lg font-semibold ">
                      {message.Designation}
                    </span>
                    <div className="flex justify-center mt-4 space-x-8">
                      {/* Instagram */}
                      <a 
                        href={message.Instagram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                         src="/instagramicon.png" 
                         alt="Instagram" 
                         className="w-8 h-8"
                       />
                     </a>
                      {/* LinkedIn */}
                      <a 
                        href={message.LinkedIN} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                        src="/Linkedinlogo.png" 
                        alt="LinkedIn" 
                        className="w-8 h-8"
                       />
                     </a>
                     {/* Twitter */}
                     <a 
                        href={message.X} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                        src="/Twitterlogo.jpg" 
                        alt="X" 
                        className="w-8 h-8"
                       />
                     </a>
                   </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    {/* Marketing & Sponshorship Team */}
    <p className='text-xl md:text-2xl font-bold p-12'>Marketing & Sponshorship Team</p>
      <Carousel 
      plugins={[Autoplay({delay: 2000 , stopOnMouseEnter:true, stopOnInteraction:false})]}
      className="w-full"
      >
      <CarouselContent>
        {
          MarketingProfile.map((message,index) => (
            <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2 basis-1/1">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="flex flex-col text-center">
                    <img 
                      src={message.Image} 
                      alt={`${message.Name}'s Profile`} 
                      className="w-50 h-50 item-center mb-4" 
                    />
                    <span className="text-lg font-semibold">
                      {message.Name}
                    </span>
                    <span className="text-lg font-semibold ">
                      {message.Designation}
                    </span>
                    <div className="flex justify-center mt-4 space-x-8">
                      {/* Instagram */}
                      <a 
                        href={message.Instagram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                         src="/instagramicon.png" 
                         alt="Instagram" 
                         className="w-8 h-8"
                       />
                     </a>
                      {/* LinkedIn */}
                      <a 
                        href={message.LinkedIN} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                        src="/Linkedinlogo.png" 
                        alt="LinkedIn" 
                        className="w-8 h-8"
                       />
                     </a>
                     {/* Twitter */}
                     <a 
                        href={message.X} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                        src="/Twitterlogo.jpg" 
                        alt="X" 
                        className="w-8 h-8"
                       />
                     </a>
                   </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    {/* Public Relations Team */}
    
    <p className='text-xl md:text-2xl font-bold p-12'>Public Relations Team</p>
      <Carousel 
      plugins={[Autoplay({delay: 2000 , stopOnMouseEnter:true, stopOnInteraction:false})]}
      className="w-full"
      >
      <CarouselContent>
        {
          PublicRelationProfile.map((message,index) => (
            <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2 basis-1/1">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="flex flex-col text-center">
                    <img 
                      src={message.Image} 
                      alt={`${message.Name}'s Profile`} 
                      className="w-50 h-50 item-center mb-4" 
                    />
                    <span className="text-lg font-semibold">
                      {message.Name}
                    </span>
                    <span className="text-lg font-semibold ">
                      {message.Designation}
                    </span>
                    <div className="flex justify-center mt-4 space-x-8">
                      {/* Instagram */}
                      <a 
                        href={message.Instagram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                         src="/instagramicon.png" 
                         alt="Instagram" 
                         className="w-8 h-8"
                       />
                     </a>
                      {/* LinkedIn */}
                      <a 
                        href={message.LinkedIN} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                        src="/Linkedinlogo.png" 
                        alt="LinkedIn" 
                        className="w-8 h-8"
                       />
                     </a>
                     {/* Twitter */}
                     <a 
                        href={message.X} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                        src="/Twitterlogo.jpg" 
                        alt="X" 
                        className="w-8 h-8"
                       />
                     </a>
                   </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    {/* Creative Team */}
    <p className='text-xl md:text-2xl font-bold p-12'>Creative Team</p>
      <Carousel 
      plugins={[Autoplay({delay: 2000 , stopOnMouseEnter:true, stopOnInteraction:false})]}
      className="w-full"
      >
      <CarouselContent>
        {
          CreativeProfile.map((message,index) => (
            <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2 basis-1/1">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="flex flex-col text-center">
                    <img 
                      src={message.Image} 
                      alt={`${message.Name}'s Profile`} 
                      className="w-50 h-50 item-center mb-4" 
                    />
                    <span className="text-lg font-semibold">
                      {message.Name}
                    </span>
                    <span className="text-lg font-semibold ">
                      {message.Designation}
                    </span>
                    <div className="flex justify-center mt-4 space-x-8">
                      {/* Instagram */}
                      <a 
                        href={message.Instagram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                         src="/instagramicon.png" 
                         alt="Instagram" 
                         className="w-8 h-8"
                       />
                     </a>
                      {/* LinkedIn */}
                      <a 
                        href={message.LinkedIN} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                        src="/Linkedinlogo.png" 
                        alt="LinkedIn" 
                        className="w-8 h-8"
                       />
                     </a>
                     {/* Twitter */}
                     <a 
                        href={message.X} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                        src="/Twitterlogo.jpg" 
                        alt="X" 
                        className="w-8 h-8"
                       />
                     </a>
                   </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    {/* Photography Team */}
    <p className='text-xl md:text-2xl font-bold p-12'>Photography Team</p>
      <Carousel 
      plugins={[Autoplay({delay: 2000 , stopOnMouseEnter:true, stopOnInteraction:false})]}
      className="w-full"
      >
      <CarouselContent>
        {
          PhotographyProfile.map((message,index) => (
            <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2 basis-1/1">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="flex flex-col text-center">
                    <img 
                      src={message.Image} 
                      alt={`${message.Name}'s Profile`} 
                      className="w-50 h-50 item-center mb-4" 
                    />
                    <span className="text-lg font-semibold">
                      {message.Name}
                    </span>
                    <span className="text-lg font-semibold ">
                      {message.Designation}
                    </span>
                    <div className="flex justify-center mt-4 space-x-8">
                      {/* Instagram */}
                      <a 
                        href={message.Instagram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                         src="/instagramicon.png" 
                         alt="Instagram" 
                         className="w-8 h-8"
                       />
                     </a>
                      {/* LinkedIn */}
                      <a 
                        href={message.LinkedIN} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                        src="/Linkedinlogo.png" 
                        alt="LinkedIn" 
                        className="w-8 h-8"
                       />
                     </a>
                     {/* Twitter */}
                     <a 
                        href={message.X} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                        src="/Twitterlogo.jpg" 
                        alt="X" 
                        className="w-8 h-8"
                       />
                     </a>
                   </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    {/* Digital Team */}
    <p className='text-xl md:text-2xl font-bold p-12'>Digital Team</p>
      <Carousel 
      plugins={[Autoplay({delay: 2000 , stopOnMouseEnter:true, stopOnInteraction:false})]}
      className="w-full"
      >
      <CarouselContent>
        {
          DigitalProfile.map((message,index) => (
            <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2 basis-1/1">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="flex flex-col text-center">
                    <img 
                      src={message.Image} 
                      alt={`${message.Name}'s Profile`} 
                      className="w-50 h-50 item-center mb-4" 
                    />
                    <span className="text-lg font-semibold">
                      {message.Name}
                    </span>
                    <span className="text-lg font-semibold ">
                      {message.Designation}
                    </span>
                    <div className="flex justify-center mt-4 space-x-8">
                      {/* Instagram */}
                      <a 
                        href={message.Instagram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                         src="/instagramicon.png" 
                         alt="Instagram" 
                         className="w-8 h-8"
                       />
                     </a>
                      {/* LinkedIn */}
                      <a 
                        href={message.LinkedIN} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                        src="/Linkedinlogo.png" 
                        alt="LinkedIn" 
                        className="w-8 h-8"
                       />
                     </a>
                     {/* Twitter */}
                     <a 
                        href={message.X} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                        src="/Twitterlogo.jpg" 
                        alt="X" 
                        className="w-8 h-8"
                       />
                     </a>
                   </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    {/* Sports Team */}
    <p className='text-xl md:text-2xl font-bold p-12'>Sports Team</p>
      <Carousel 
      plugins={[Autoplay({delay: 2000 , stopOnMouseEnter:true, stopOnInteraction:false})]}
      className="w-full max-w-sm"
      >
      <CarouselContent>
        {
          SportsProfile.map((message,index) => (
            <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="flex flex-col text-center">
                    <img 
                      src={message.Image} 
                      alt={`${message.Name}'s Profile`} 
                      className="w-50 h-50 item-center mb-4" 
                    />
                    <span className="text-lg font-semibold">
                      {message.Name}
                    </span>
                    <span className="text-lg font-semibold ">
                      {message.Designation}
                    </span>
                    <div className="flex justify-center mt-4 space-x-8">
                      {/* Instagram */}
                      <a 
                        href={message.Instagram} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                         src="/instagramicon.png" 
                         alt="Instagram" 
                         className="w-8 h-8"
                       />
                     </a>
                      {/* LinkedIn */}
                      <a 
                        href={message.LinkedIN} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                        src="/Linkedinlogo.png" 
                        alt="LinkedIn" 
                        className="w-8 h-8"
                       />
                     </a>
                     {/* Twitter */}
                     <a 
                        href={message.X} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:opacity-75"
                      >
                       <img 
                        src="/Twitterlogo.jpg" 
                        alt="X" 
                        className="w-8 h-8"
                       />
                     </a>
                   </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </main>
  )
}
