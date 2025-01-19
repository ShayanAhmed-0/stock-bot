import {CircleDollarSign, Calendar, Home, Inbox, Search, Settings,BotMessageSquare,ChartCandlestick  } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Pricing",
    url: "/pricing",
    icon: CircleDollarSign,
  },
  {
    title: "Pricing",
    url: "/pricing",
    icon: CircleDollarSign,
  },
  {
    title: "Chat",
    url: "/",
    icon: BotMessageSquare,
  },
  {
    title: "Trading View",
    url: "https://www.tradingview.com/?utm_campaign=ticker-tape-logo&utm_medium=widget_new&utm_source=localhost",
    icon: ChartCandlestick,
  },
  {
    title: "News",
    url: "/news",
    icon: ChartCandlestick,
  },
//   {
//     title: "Inbox",
//     url: "#",
//     icon: Inbox,
//   },
//   {
//     title: "Calendar",
//     url: "#",
//     icon: Calendar,
//   },
//   {
//     title: "Search",
//     url: "#",
//     icon: Search,
//   },
//   {
//     title: "Settings",
//     url: "#",
//     icon: Settings,
//   },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
