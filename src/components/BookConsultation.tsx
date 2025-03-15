
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { toast } from '@/components/ui/use-toast';
import { CalendarIcon, Check, Clock } from 'lucide-react';

type BookConsultationProps = {
  buttonText?: string;
  className?: string;
};

const availableTimeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', 
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
];

const BookConsultation = ({ buttonText = "Book a Consultation", className = "" }: BookConsultationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | undefined>(undefined);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !timeSlot) {
      toast({
        title: "Error",
        description: "Please select a date and time for your consultation.",
        variant: "destructive",
      });
      return;
    }
    
    // Format date for Google Calendar link
    const formattedDate = format(date, 'yyyyMMdd');
    const timeFormatted = timeSlot.replace(/[: ]/g, '').toUpperCase();
    const endTime = getEndTime(timeSlot);
    
    // Create Google Calendar event link
    const eventDetails = {
      text: `Consultation with ${name}`,
      dates: `${formattedDate}T${timeFormatted}/${formattedDate}T${endTime}`,
      details: `Consultation requested by ${name}\nEmail: ${email}\nPhone: ${phone}`,
      location: 'Google Meet / Phone Call',
      add: 'ar008511@gmail.com'
    };
    
    const googleCalendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.text)}&dates=${eventDetails.dates}&details=${encodeURIComponent(eventDetails.details)}&location=${encodeURIComponent(eventDetails.location)}&add=${eventDetails.add}`;
    
    // Open Google Calendar in a new tab
    window.open(googleCalendarLink, '_blank');
    
    // Send notification email logic would be implemented on the backend
    
    toast({
      title: "Success!",
      description: "Your consultation has been scheduled. Check your email for the confirmation.",
      variant: "default",
    });
    
    // Reset form and close dialog
    setName('');
    setEmail('');
    setPhone('');
    setDate(undefined);
    setTimeSlot(undefined);
    setIsOpen(false);
  };
  
  // Helper to calculate end time (1 hour later)
  const getEndTime = (time: string): string => {
    const [hourStr, minuteStr, period] = [
      time.split(':')[0],
      time.split(':')[1].split(' ')[0],
      time.split(' ')[1]
    ];
    
    let hour = parseInt(hourStr);
    if (period === 'PM' && hour !== 12) hour += 12;
    if (period === 'AM' && hour === 12) hour = 0;
    
    // Add 1 hour
    hour = (hour + 1) % 24;
    
    // Format back to Google Calendar format
    const hourFormatted = hour.toString().padStart(2, '0');
    return `${hourFormatted}${minuteStr}00`;
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className={`font-bold text-white ${className}`}>
          {buttonText}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Book Your Free Consultation</DialogTitle>
          <DialogDescription>
            Select a date and time that works for you, and we'll connect to discuss your project.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          {/* Name input */}
          <div className="space-y-2">
            <label htmlFor="name" className="font-medium">Full Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
              placeholder="Your name"
            />
          </div>
          
          {/* Email input */}
          <div className="space-y-2">
            <label htmlFor="email" className="font-medium">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
              placeholder="Your email"
            />
          </div>
          
          {/* Phone input */}
          <div className="space-y-2">
            <label htmlFor="phone" className="font-medium">Phone Number</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
              placeholder="Your phone number"
            />
          </div>
          
          {/* Date selection */}
          <div className="space-y-2">
            <label className="font-medium">Select Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => 
                    date < new Date(new Date().setHours(0, 0, 0, 0)) || 
                    date.getDay() === 0 || 
                    date.getDay() === 6
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Time slot selection */}
          <div className="space-y-2">
            <label className="font-medium">Select Time</label>
            <div className="grid grid-cols-3 gap-2">
              {availableTimeSlots.map((slot) => (
                <Button
                  key={slot}
                  type="button"
                  variant={timeSlot === slot ? "default" : "outline"}
                  className={`h-10 ${timeSlot === slot ? "bg-purple-600" : ""}`}
                  onClick={() => setTimeSlot(slot)}
                >
                  <Clock className="mr-1 h-3 w-3" /> {slot}
                </Button>
              ))}
            </div>
          </div>
          
          <DialogFooter className="pt-4">
            <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
              Schedule Consultation <Check className="ml-2 h-4 w-4" />
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookConsultation;
