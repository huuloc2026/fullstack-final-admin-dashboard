import React from "react";
import { CheckCircleIcon, MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
const Contact = () => {
  return (
    <>
      {/* Section: Contact */}
      <div className="flex flex-col space-y-4 text-center">
        <h3 className="text-xl font-semibold">Contact Us</h3>
        <div className="flex items-center justify-center space-x-2">
          <MapPinIcon className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
          <address className="text-sm not-italic text-neutral-600 dark:text-neutral-300">
            225 Bush St, San Francisco, CA 94104
          </address>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <PhoneIcon className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
          <a
            href="#"
            className="text-sm underline text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-50"
          >
            +1 (415) 555-2671
          </a>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <MailIcon className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
          <Link
            href="#"
            className="text-sm underline text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-50"
            prefetch={false}
          >
            info@example.com
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;
