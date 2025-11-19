'use client'

import { IconScale, IconChart, IconShield, IconBriefcase, IconDocument, IconEdit, IconCalendar, IconCheck, IconFamily } from '@/components/icons'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  scale: IconScale,
  chart: IconChart,
  shield: IconShield,
  briefcase: IconBriefcase,
  document: IconDocument,
  edit: IconEdit,
  calendar: IconCalendar,
  check: IconCheck,
  family: IconFamily,
}

export function getArticleIcon(iconType: string) {
  return iconMap[iconType] || IconDocument
}

