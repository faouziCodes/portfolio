import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

// SidebarTrigger reads the open/close state via React context from
// SidebarProvider. Astro renders each framework-component reference in a
// .astro template as its own independent unit, so nesting them directly in
// the template (even under one client:load) does not put them in the same
// React tree - the context lookup fails. Composing them together in real
// JSX, in one component, is what makes them share a tree.
export function SiteSidebar() {
  return (
    <SidebarProvider>
      <SidebarTrigger />
    </SidebarProvider>
  )
}
