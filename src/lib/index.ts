// Barrel export — components are auto-registered on import.
// Import individual components for side-effect registration.
export { Button } from './button.ts'
export type { ButtonVariant, ButtonSize } from './button.ts'
export { Input } from './input.ts'

export { Checkbox } from './checkbox.ts'

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from './avatar.ts'
export type { AvatarSize } from './avatar.ts'
