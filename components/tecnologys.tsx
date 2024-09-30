type IconProps = React.HTMLAttributes<SVGElement>

type Item = {
  name: string
  icon: (props: IconProps) => JSX.Element
}
interface TecnologysProps {
  items: Item[]
}

export function Tecnologys({ items }: TecnologysProps) {
  return items.map(item => {
    return (
      <div key={item.name} className="group relative">
        <span className="-top-11 -translate-x-1/2 invisible absolute left-1/2 scale-75 text-nowrap rounded-md border border-border bg-popover p-2 text-popover-foreground text-sm opacity-0 transition delay-1000 group-hover:visible group-hover:scale-100 group-hover:opacity-100">
          {item.name}
        </span>
        <item.icon className="size-8 text-b-w-foreground lg:size-10" />
      </div>
    )
  })
}
