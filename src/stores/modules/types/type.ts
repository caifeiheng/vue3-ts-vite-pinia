import type { RouteLocationRaw } from "vue-router";
export interface userState{
  token:string|null;
  menuRoutes:RouteLocationRaw
}