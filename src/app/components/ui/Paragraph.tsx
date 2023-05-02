import { FC, HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../lib/utils";


// Set the default and variable properties a paragraph can have 
const paragraphVariants = cva(['max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center'], {
    // Sets the variant styles a paragraph can have
    variants: {
        size: {
            default: 'text-base sm:text-lg',
            sm: 'text-sm sm:text-base',
        }
    },
    // Sets the default variant
    defaultVariants: {
        size: 'default',
    },
});

// Set the paragraph props to extend the default HTML properties and also our default props specified above

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof paragraphVariants>{};

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
    ({className, size, children, ...props}, ref) => {
        return (
            <p ref={ref} 
                {...props}
                className={cn(paragraphVariants({size, className}))}
            >
                {children}
            </p>
        )
    }
)
Paragraph.displayName = 'Paragraph';

export default Paragraph;
