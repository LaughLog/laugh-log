'use client';

import {
  useOrganization,
  UserButton,
  OrganizationSwitcher,
  OrganizationProfile
} from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

import './sidebar.css';

const Sidebar = () => {
  const { organization } = useOrganization();

  return (
    <div className="h-full w-[328px] bg-coral100 px-6 py-8 ">
      <Link href={'/'}>
        <div className="flex gap-[6px]">
          <Image src="/logo.svg" alt="logo" width={160} height={32} />
          <Image src="/star.svg" alt="star" width={32} height={32} />
        </div>
      </Link>
      <div className="relative mt-6 h-[74px] w-[280px] hover:bg-coral200">
        <span className="absolute left-2 top-2 z-20 text-xs font-bold">나</span>
        <UserButton
          showName
          appearance={{
            elements: {
              userButtonBox: 'relative',
              userButtonTrigger:
                'w-[280px] h-[74px] rounded-none flex justify-start z-10',
              userButtonAvatarBox: 'absolute left-2 bottom-2',
              userButtonOuterIdentifier: 'absolute bottom-4 left-12',
              userButtonPopoverRootBox: '-top-[100px]',
              userButtonPopoverCard: 'absolute hover:top-6'
            }
          }}
        />
        <Image
          src="/sidebar-arrow.svg"
          alt="arrow"
          width={20}
          height={20}
          className="absolute bottom-4 right-2"
        />
      </div>
      <hr className="my-4" />
      <div className="relative mt-6 h-[74px] w-[280px] hover:bg-coral200">
        <span className="absolute left-2 top-2 z-20 text-xs font-bold">팀</span>
        <OrganizationSwitcher
          afterLeaveOrganizationUrl="/dashboard"
          hidePersonal
          appearance={{
            elements: {
              rootBox: 'focus:outline-none',
              organizationSwitcherTrigger:
                'focus:outline-none w-[280px] h-[74px] rounded-none flex justify-start items-end pb-2 hover:bg-transparent',
              avatarBox: 'hidden',
              userPreview: 'absolute -left-[2px] bottom-2 text-lg font-bold',
              organizationPreviewMainIdentifier: 'text-lg font-bold',
              organizationSwitcherTriggerIcon: 'hidden',
              notificationBadge: 'absolute top-0 right-0'
            }
          }}
        />
        <Image
          src="/sidebar-arrow.svg"
          alt="arrow"
          width={20}
          height={20}
          className="absolute bottom-4 right-2"
        />
      </div>
      <div className="userList">
        {organization && (
          <OrganizationProfile
            appearance={{
              elements: {
                card: 'm-0 bg-transparent shadow-none w-full',
                navbar: 'hidden',
                header: 'hidden',
                pageScrollBox: 'p-0',
                tabListContainer: 'hidden',
                tableHead: 'hidden',
                userPreview: 'gap-2',
                avatarBox: 'w-8 h-8',
                userPreviewSecondaryIdentifier: 'hidden',
                userPreviewMainIdentifier: 'gap-2'
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
