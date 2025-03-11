"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { OctagonAlert } from "lucide-react";
import { ReactNode } from "react";
import { toast } from "sonner";

interface AlertDialogWithIconProps {
  title: string;
  description: string;
  buttonLabel: string;
  onConfirm?: () => void;
  variant?: "default" | "destructive" | "outline";
  icon?: ReactNode;
}

export default function AlertDialogWithIcon({
  title,
  description,
  buttonLabel,

  variant = "outline",
  icon = <OctagonAlert className="h-5 w-5 text-destructive" />,
}: AlertDialogWithIconProps) {
  const onConfirm = () => {
    return toast("Item deleted successfully");
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={variant}>{buttonLabel}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="mx-auto sm:mx-0 mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-destructive/10">
              {icon}
            </div>
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-[15px]">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-2 sm:justify-center">
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className={buttonVariants({ variant: "destructive" })}
            onClick={onConfirm}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
