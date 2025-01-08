interface TechBadgeProps {
  label: string; // Define the type of 'label' as string
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="px-3 py-1 text-sm font-medium text-gray-900 bg-primary rounded-lg"> // updated text color to 'text-gray-900' for better Visibility
      {label}
    </span>
  );
}
