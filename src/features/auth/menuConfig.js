// menuConfig.js
export const menuItems = [
  {
    section: "Organization",
    items: [
      {
        label: "โครงสร้างองค์กร",
        to: "/organization",
        icon: "RectangleGroup",
        roles: ["admin", "user"],
      },
      {
        label: "ข้อมูลพนักงาน",
        to: "/employees",
        icon: "Identification",
        roles: ["admin"],
      },
      {
        label: "ประเมินพนักงาน",
        to: "/evaluation",
        icon: "CheckBadge",
        roles: ["admin", "manager"],
      },
      {
        label: "รายงานวิเคราะห์ข้อมูล",
        to: "/reports",
        icon: "PresentationChartBar",
        roles: ["admin"],
      },
      {
        label: "การอนุญาต",
        to: "/permissions",
        icon: "ShieldCheck",
        roles: ["admin"],
      },
      {
        label: "ความปลอดภัย",
        to: "/security",
        icon: "LockClosed",
        roles: ["admin"],
      },
    ],
  },
  {
    section: "Employment",
    items: [
      {
        label: "สมัครพนักงาน",
        to: "/recruitment",
        icon: "UserPlus",
        roles: ["admin", "hr"],
      },
      {
        label: "Onboarding",
        to: "/onboarding",
        icon: "RectangleStack",
        roles: ["admin", "hr"],
      },
    ],
  },
  {
    section: "Working hours",
    items: [
      {
        label: "ทรัพยากรบุคคล",
        to: "/hr",
        icon: "Users",
        roles: ["admin", "hr"],
      },
      {
        label: "ลงเวลางาน",
        to: "/attendance",
        icon: "Clock",
        roles: ["admin", "hr", "user"],
      },
    ],
  },
  {
    section: "Document & Approval",
    items: [
      {
        label: "เอกสาร & การอนุมัติ",
        to: "/documents",
        icon: "FolderOpen",
        roles: ["admin", "user"],
      },
      {
        label: "จัดการเอกสาร",
        to: "/manage-documents",
        icon: "PaperClip",
        roles: ["admin"],
      },
    ],
  },
  {
    section: "Salary calculation",
    items: [
      {
        label: "การคำนวณ",
        to: "/salary-calc",
        icon: "Calculator",
        roles: ["admin", "finance"],
      },
      {
        label: "การบันทึกข้อมูล",
        to: "/salary-records",
        icon: "CloudArrowDown",
        roles: ["admin", "finance"],
      },
      {
        label: "สวัสดิการพนักงาน",
        to: "/benefits",
        icon: "Gift",
        roles: ["admin", "hr"],
      },
    ],
  },
  {
    section: "Learning & Development",
    items: [
      {
        label: "การเรียนรู้เพิ่มเติม",
        to: "/learning",
        icon: "Briefcase",
        roles: ["admin", "user"],
      },
      {
        label: "การประเมินผล",
        to: "/ld-evaluation",
        icon: "ClipboardDocumentCheck",
        roles: ["admin", "manager"],
      },
    ],
  },
  {
    section: "Help",
    items: [
      {
        label: "แลกเปลี่ยนข้อมูล",
        to: "/exchange",
        icon: "Link",
        roles: ["admin", "user"],
      },
      {
        label: "ช่วยวางแผนงาน",
        to: "/planning",
        icon: "CubeTransparent",
        roles: ["admin", "manager"],
      },
      {
        label: "PHQ-9",
        to: "/phq9",
        icon: "ExclamationTriangle",
        roles: ["admin", "hr", "user"],
      },
    ],
  },
  {
    section: "AI and Insight",
    items: [
      {
        label: "ระบบจัดการอัตโนมัติ",
        to: "/automation",
        icon: "Sparkles",
        roles: ["admin"],
      },
    ],
  },
  {
    section: "General",
    items: [
      {
        label: "การตั้งค่า",
        to: "/settings",
        icon: "Cog8Tooth",
        roles: ["admin", "user", "manager"],
      },
    ],
  },
];
