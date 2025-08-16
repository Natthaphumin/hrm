// MainNav.jsx
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useUserRole } from "../features/auth/useUserRole";

import {
  HiOutlineBriefcase,
  HiOutlineCalculator,
  HiOutlineCheckBadge,
  HiOutlineClipboardDocumentCheck,
  HiOutlineClock,
  HiOutlineCloudArrowDown,
  HiOutlineCog8Tooth,
  HiOutlineCubeTransparent,
  HiOutlineExclamationTriangle,
  HiOutlineFolderOpen,
  HiOutlineGift,
  HiOutlineIdentification,
  HiOutlineLink,
  HiOutlineLockClosed,
  HiOutlinePaperClip,
  HiOutlinePresentationChartBar,
  HiOutlineRectangleGroup,
  HiOutlineRectangleStack,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUserPlus,
  HiOutlineUsers,
} from "react-icons/hi2";

// กำหนดเมนูเป็น array พร้อม role ที่เข้าถึงได้
const menuItems = [
  // Organization
  {
    section: "Organization",
    label: "โครงสร้างองค์กร",
    icon: <HiOutlineRectangleGroup />,
    to: "",
    roles: ["admin", "mod", "user"],
  },
  {
    label: "ข้อมูลพนักงาน",
    icon: <HiOutlineIdentification />,
    to: "",
    roles: ["admin", "mod", "user"],
  },
  {
    label: "ประเมินพนักงาน",
    icon: <HiOutlineCheckBadge />,
    to: "",
    roles: ["admin", "mod", "user"],
  },
  {
    label: "รายงานวิเคราะห์ข้อมูล",
    icon: <HiOutlinePresentationChartBar />,
    to: "",
    roles: ["admin", "mod", "user"],
  },
  {
    label: "การอนุญาต",
    icon: <HiOutlineShieldCheck />,
    to: "",
    roles: ["admin", "mod", "user"],
  },
  {
    label: "ความปลอดภัย",
    icon: <HiOutlineLockClosed />,
    to: "",
    roles: ["admin", "mod", "user"],
  },

  // Employment
  {
    section: "Employment",
    label: "สมัครพนักงาน",
    icon: <HiOutlineUserPlus />,
    to: "",
    roles: ["admin", "mod", "user"],
  },
  {
    label: "Onboarding",
    icon: <HiOutlineRectangleStack />,
    to: "",
    roles: ["admin", "mod", "user"],
  },

  // Working hours
  {
    section: "Working hours",
    label: "ทรัพยาการบุคคล",
    icon: <HiOutlineUsers />,
    to: "",
    roles: ["admin", "mod", "user"],
  },
  {
    label: "ลงเวลางาน",
    icon: <HiOutlineClock />,
    to: "",
    roles: ["admin", "mod", "user"],
  },

  // Document & Approval
  {
    section: "Document & Approval",
    label: "เอกสาร & การอนุมัติ",
    icon: <HiOutlineFolderOpen />,
    to: "",
    roles: ["admin", "mod", "user"],
  },
  {
    label: "จัดการเอกสาร",
    icon: <HiOutlinePaperClip />,
    to: "",
    roles: ["admin", "mod", "user"],
  },

  // Salary calculation
  {
    section: "Salary calculation",
    label: "การคำนวณ",
    icon: <HiOutlineCalculator />,
    to: "",
    roles: ["admin", "mod", "user"],
  },
  {
    label: "การบันทึกข้อมูล",
    icon: <HiOutlineCloudArrowDown />,
    to: "",
    roles: ["admin", "mod", "user"],
  },
  {
    label: "สวัสดิการพนักงาน",
    icon: <HiOutlineGift />,
    to: "",
    roles: ["admin", "mod", "user"],
  },

  // Learning & Development
  {
    section: "Learning & Development",
    label: "การเรียนรู้เพิ่มเติม",
    icon: <HiOutlineBriefcase />,
    to: "",
    roles: ["admin", "mod", "user"],
  },
  {
    label: "การประเมินผล",
    icon: <HiOutlineClipboardDocumentCheck />,
    to: "",
    roles: ["admin", "mod", "user"],
  },

  // Help
  {
    section: "Help",
    label: "แลกเปลี่ยนข้อมูล",
    icon: <HiOutlineLink />,
    to: "",
    roles: ["admin", "mod", "user"],
  },
  {
    label: "ช่วยวางแผนงาน",
    icon: <HiOutlineCubeTransparent />,
    to: "",
    roles: ["admin", "mod", "user"],
  },
  {
    label: "PHQ-9",
    icon: <HiOutlineExclamationTriangle />,
    to: "",
    roles: ["admin", "mod", "user"],
  },

  // AI and Insight
  {
    section: "AI and Insight",
    label: "ระบบจัดการอัตโนมัติ",
    icon: <HiOutlineSparkles />,
    to: "",
    roles: ["admin", "mod", "user"],
  },

  // General
  {
    section: "General",
    label: "การตั้งค่า",
    icon: <HiOutlineCog8Tooth />,
    to: "settings",
    roles: ["admin", "mod", "user"],
  },
];

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-gray-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0.6rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-gray-800);
    background-color: var(--color-gray-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-gray-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-yellow-600);
  }
`;

function MainNav() {
  const role = useUserRole();

  // ถ้า role ยังโหลดไม่เสร็จ ให้ return null กันจอวูบ
  if (!role) return null;

  return (
    <nav>
      <NavList>
        {menuItems
          .filter((item) => item.roles.includes(role))
          .map((item) => (
            <li key={item.label}>
              <StyledNavLink to={item.to}>
                {item.icon}
                <span>{item.label}</span>
              </StyledNavLink>
            </li>
          ))}
      </NavList>
    </nav>
  );
}

export default MainNav;
