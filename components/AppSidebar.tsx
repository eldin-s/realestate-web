import { Calendar, Home, HousePlus, Search, Settings } from "lucide-react"

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
    title: "Početna",
    url: "/",
    icon: Home,
  },
  {
    title: "Dodaj nekretninu",
    url: "/dashboard/dodaj-nekretninu",
    icon: HousePlus,
  },
  {
    title: "Kalendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Pretraga",
    url: "#",
    icon: Search,
  },
  {
    title: "Podešavanja",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel><h1 className="font-bold text-xl">Zeeker</h1></SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="p-6" title={item.title}>
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