import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useUserRole } from "../features/auth/useUserRole";
import { menuItems } from "../features/auth/menuConfig";

// icons
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
  HiOutlinePresentationChartBar,
  HiOutlineRectangleGroup,
  HiOutlineRectangleStack,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUserPlus,
  HiOutlineUsers,
} from "react-icons/hi2";

const iconMap = {
  RectangleGroup: <HiOutlineRectangleGroup />,
  Identification: <HiOutlineIdentification />,
  CheckBadge: <HiOutlineCheckBadge />,
  PresentationChartBar: <HiOutlinePresentationChartBar />,
  ShieldCheck: <HiOutlineShieldCheck />,
  LockClosed: <HiOutlineLockClosed />,
  UserPlus: <HiOutlineUserPlus />,
  RectangleStack: <HiOutlineRectangleStack />,
  Users: <HiOutlineUsers />,
  Clock: <HiOutlineClock />,
  FolderOpen: <HiOutlineFolderOpen />,
  PaperClip: <HiOutlineClipboardDocumentCheck />,
  Calculator: <HiOutlineCalculator />,
  CloudArrowDown: <HiOutlineCloudArrowDown />,
  Gift: <HiOutlineGift />,
  Briefcase: <HiOutlineBriefcase />,
  ClipboardDocumentCheck: <HiOutlineClipboardDocumentCheck />,
  Link: <HiOutlineLink />,
  CubeTransparent: <HiOutlineCubeTransparent />,
  ExclamationTriangle: <HiOutlineExclamationTriangle />,
  Sparkles: <HiOutlineSparkles />,
  Cog8Tooth: <HiOutlineCog8Tooth />,
};

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

  &:hover,
  &.active {
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
  &.active svg {
    color: var(--color-yellow-600);
  }
`;

const DividerWithText = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin: 1.2rem 0;
  color: var(--color-yellow-700);
  opacity: 0.7;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-top: 1px solid var(--color-gray-100);
  }

  &::before {
    margin-right: 0.75em;
  }

  &::after {
    margin-left: 0.75em;
  }
`;

export default function MainNav() {
  const role = useUserRole();

  if (!role) return null; // รอโหลด role

  return (
    <nav>
      {menuItems.map((section, idx) => {
        // filter items ตาม role ก่อน ถ้าไม่มี item ที่ role เหมาะสม จะไม่โชว์ section เลย
        const filteredItems = section.items.filter((item) =>
          item.roles.includes(role)
        );
        if (filteredItems.length === 0) return null;

        return (
          <div key={idx}>
            {section.section && (
              <DividerWithText>{section.section}</DividerWithText>
            )}
            <NavList>
              {filteredItems.map((item, i) => (
                <li key={i}>
                  <StyledNavLink to={item.to}>
                    {iconMap[item.icon]}
                    <span>{item.label}</span>
                  </StyledNavLink>
                </li>
              ))}
            </NavList>
          </div>
        );
      })}
    </nav>
  );
}
