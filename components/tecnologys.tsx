type IconProps = React.HTMLAttributes<SVGElement>

export type Tech = {
  name: string
  icon: (props: IconProps) => JSX.Element
}

interface TecnologysProps {
  item: Tech
}

export function Tecnologys({ item }: TecnologysProps) {
  return (
    <div
      className="group relative rounded-md border border-border bg-muted p-1"
      aria-label={item.name}
    >
      <span
        id={`tooltip-${item.name}`}
        className="-top-11 -translate-x-1/2 invisible absolute left-1/2 scale-75 text-nowrap rounded-md border border-border bg-popover p-2 text-popover-foreground text-sm opacity-0 transition delay-1000 group-hover:visible group-hover:scale-100 group-hover:opacity-100"
      >
        {item.name}
      </span>
      <item.icon
        className="size-6 text-b-w-foreground lg:size-8"
        aria-hidden="true"
      />
    </div>
  )
}
