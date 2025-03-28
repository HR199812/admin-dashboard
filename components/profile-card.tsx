import React from "react";
import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 relative">
      <div className="px-6">
        <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 overflow-hidden border-transparent bg-primary text-primary-foreground absolute start-4 top-4">
          Pro
        </span>
        <div className="space-y-12">
          <div className="flex flex-col items-center space-y-4">
            <span className="relative flex shrink-0 overflow-hidden rounded-full size-20">
              <Image
                className="aspect-square size-full"
                alt="@shadcn"
                src="https://bundui-images.netlify.app/avatars/10.png"
                width={80}
                height={80}
              />
            </span>
            <div className="text-center">
              <h5 className="text-xl font-semibold">Anshan Haso</h5>
              <div className="text-muted-foreground text-sm">
                Project Manager
              </div>
            </div>
          </div>
          <div className="bg-muted grid grid-cols-3 divide-x rounded-md border text-center *:py-3">
            <div>
              <h5 className="text-lg font-semibold">184</h5>
              <div className="text-muted-foreground text-sm">Post</div>
            </div>
            <div>
              <h5 className="text-lg font-semibold">32</h5>
              <div className="text-muted-foreground text-sm">Projects</div>
            </div>
            <div>
              <h5 className="text-lg font-semibold">4.5K</h5>
              <div className="text-muted-foreground text-sm">Members</div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-3">📧 anshan@gmail.com</div>
            <div className="flex items-center gap-3">
              📞 (+1-876) 8654 239 581
            </div>
            <div className="flex items-center gap-3">📍 New York</div>
            <div className="flex items-center gap-3">
              🔗{" "}
              <a
                href="https://shadcnuikit.com"
                className="hover:text-primary hover:underline"
                target="_blank"
              >
                https://shadcnuikit.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
