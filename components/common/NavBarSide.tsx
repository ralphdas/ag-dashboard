"use client";

import {
  CircleHelp,
  Cog,
  DollarSign,
  EyeIcon,
  FilmIcon,
  FlipHorizontal,
  HomeIcon,
  MenuIcon,
  ThumbsUp,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

export default function NavBarSide() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  const menuItems = [
    {
      href: "/dashboard/",
      label: "Dashboard",
      subtitle: "Home",
      icon: <HomeIcon color="#0F172A" size={24} />,
    },
    {
      href: "/dashboard/media",
      label: "Media",
      subtitle: "Images and Videos",
      icon: <FilmIcon color="#0F172A" size={24} />,
    },
    {
      href: "/dashboard/campaigns",
      label: "Campaigns",
      subtitle: "Create and Manage",
      icon: <FlipHorizontal color="#0F172A" size={24} />,
    },
    {
      href: "/dashboard/approval",
      label: "Approval",
      subtitle: "Manage campaigns",
      icon: <ThumbsUp color="#0F172A" size={24} />,
    },
    {
      href: "/dashboard/locations",
      label: "Locations",
      subtitle: "Signage Display Locations",
      icon: <EyeIcon color="#0F172A" size={24} />,
    },
    {
      href: "/dashboard/billing",
      label: "Billing",
      subtitle: "Payment information",
      icon: <DollarSign color="#0F172A" size={24} />,
    },
    {
      href: "/dashboard/statistics",
      label: "Statistics",
      subtitle: "Performance",
      icon: <TrendingUpIcon color="#0F172A" size={24} />,
    },
    {
      href: "/dashboard/team-management",
      label: "Users",
      subtitle: "Manage team",
      icon: <UsersIcon color="#0F172A" size={24} />,
    },
    {
      href: "/dashboard/settings",
      label: "Settings",
      subtitle: "Adjust your preferences",
      icon: <Cog color="#0F172A" size={24} />,
    },
    {
      href: "/dashboard/documentation",
      label: "Documentation",
      subtitle: "Find your answer",
      icon: <CircleHelp color="#0F172A" size={24} />,
    },
  ];

  return (
    <>
      <Button
        onClick={() => setShow(!show)}
        className="md:hidden fixed z-20 top-10 left-3.5 pb-1"
        variant={"link"}
        size={"icon"}
      >
        <MenuIcon className="!w-8 !h-8" color="#fff" />
      </Button>
      <div
        className={`fixed z-10 top-0 ${
          show ? "left-0" : "md:left-0 -left-80"
        } transition-all w-80 mt-[112px] bottom-0 border-r border-adsbin-grey-100 overflow-auto flex bg-white flex-col`}
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            onClick={() => setShow(!show)}
            className={`flex items-center gap-5 leading-none text--adsbin-grey-1000 text-sm tracking-wide py-4 px-5 border-t border-adsbin-grey-100 transition-all border-r-4 ${
              pathname === item.href
                ? "border-r-adsbin-green-500"
                : "border-r-transparent hover:border-r-adsbin-green-500"
            } 
                            ${item.label === "Documentation" ? "mt-auto" : ""}
                        `}
          >
            {item.icon}
            <span className="flex flex-col gap-1">
              <strong className="block font-extrabold uppercase">
                {item.label}
              </strong>
              {item.subtitle}
            </span>
          </Link>
        ))}
        <p className="text-[10px] text--adsbin-grey-1000 font-semibold text-right py-2 px-6 border-t border-adsbin-grey-100">
          Version 0.2.1.223
        </p>
      </div>
    </>
  );
}
