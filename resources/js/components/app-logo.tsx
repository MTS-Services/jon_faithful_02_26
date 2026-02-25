import { cn } from '@/lib/utils';

interface AppLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
}

export default function AppLogo({ className, ...props }: AppLogoProps) {
    return (
        <>
           <div className="flex items-center gap-2">
            {/* <p className='font-bold text-black'>Why Tennessee</p> */}
            <img src="/assets/logo/why-tennessee-logo.png"
                            alt="Why Tennessee" className={cn("h-12 w-12", className)} {...props} />
           </div>
        </>
    );
}