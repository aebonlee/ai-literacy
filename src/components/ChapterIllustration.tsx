import type { ReactElement } from 'react';

interface ChapterIllustrationProps {
  icon?: string;
  chapterNumber?: number;
  color?: string;
  size?: number;
}

/**
 * SVG illustration component for chapters.
 * Maps icon names or chapter numbers to simple SVG illustrations.
 */
const ChapterIllustration = ({
  icon,
  chapterNumber,
  color = '#0D1B3E',
  size = 48,
}: ChapterIllustrationProps): ReactElement => {
  const r = size / 2;
  const cx = r;
  const cy = r;
  const bgR = r - 1;

  // Map chapter numbers to icon names
  const iconMap: Record<number, string> = {
    1: 'ai',
    2: 'brain',
    3: 'history',
    4: 'robot',
    5: 'prompt',
    6: 'practice',
    7: 'ethics',
    8: 'fairness',
    9: 'security',
    10: 'data',
    11: 'work',
    12: 'future',
  };

  const resolvedIcon = icon || (chapterNumber ? iconMap[chapterNumber] : undefined) || 'ai';

  const renderIcon = () => {
    switch (resolvedIcon) {
      case 'ai':
        // AI: circuit / brain node
        return (
          <>
            <circle cx={cx} cy={cy} r={bgR} fill={color} opacity={0.12} />
            <circle cx={cx} cy={cy - 4} r={3} fill={color} />
            <circle cx={cx - 7} cy={cy + 5} r={2.5} fill={color} />
            <circle cx={cx + 7} cy={cy + 5} r={2.5} fill={color} />
            <line x1={cx} y1={cy - 1} x2={cx - 7} y2={cy + 2.5} stroke={color} strokeWidth={1.5} />
            <line x1={cx} y1={cy - 1} x2={cx + 7} y2={cy + 2.5} stroke={color} strokeWidth={1.5} />
            <line x1={cx - 7} y1={cy + 5} x2={cx + 7} y2={cy + 5} stroke={color} strokeWidth={1} strokeDasharray="2 1" />
          </>
        );

      case 'brain':
        // Brain / neural network
        return (
          <>
            <circle cx={cx} cy={cy} r={bgR} fill={color} opacity={0.12} />
            <ellipse cx={cx} cy={cy - 2} rx={7} ry={5.5} fill="none" stroke={color} strokeWidth={1.5} />
            <line x1={cx - 3} y1={cy - 5} x2={cx - 3} y2={cy + 4} stroke={color} strokeWidth={1} />
            <circle cx={cx + 3} cy={cy - 1} r={1.5} fill={color} />
            <circle cx={cx - 4} cy={cy + 2} r={1} fill={color} />
            <circle cx={cx + 1} cy={cy + 4} r={1.2} fill={color} />
          </>
        );

      case 'history':
        // History / timeline
        return (
          <>
            <circle cx={cx} cy={cy} r={bgR} fill={color} opacity={0.12} />
            <line x1={cx - 8} y1={cy} x2={cx + 8} y2={cy} stroke={color} strokeWidth={1.5} />
            <circle cx={cx - 6} cy={cy} r={2} fill={color} />
            <circle cx={cx} cy={cy} r={2} fill={color} />
            <circle cx={cx + 6} cy={cy} r={2} fill={color} />
            <line x1={cx - 6} y1={cy - 4} x2={cx - 6} y2={cy - 2} stroke={color} strokeWidth={1} />
            <line x1={cx} y1={cy - 4} x2={cx} y2={cy - 2} stroke={color} strokeWidth={1} />
            <line x1={cx + 6} y1={cy - 4} x2={cx + 6} y2={cy - 2} stroke={color} strokeWidth={1} />
          </>
        );

      case 'robot':
        // Robot / chat bot
        return (
          <>
            <circle cx={cx} cy={cy} r={bgR} fill={color} opacity={0.12} />
            <rect x={cx - 6} y={cy - 5} width={12} height={10} rx={2} fill="none" stroke={color} strokeWidth={1.5} />
            <circle cx={cx - 3} cy={cy - 1} r={1.5} fill={color} />
            <circle cx={cx + 3} cy={cy - 1} r={1.5} fill={color} />
            <line x1={cx - 3} y1={cy + 3} x2={cx + 3} y2={cy + 3} stroke={color} strokeWidth={1.2} strokeLinecap="round" />
            <line x1={cx} y1={cy - 7} x2={cx} y2={cy - 5} stroke={color} strokeWidth={1.2} />
            <circle cx={cx} cy={cy - 8} r={1} fill={color} />
          </>
        );

      case 'prompt':
        // Prompt / text cursor
        return (
          <>
            <circle cx={cx} cy={cy} r={bgR} fill={color} opacity={0.12} />
            <text
              x={cx}
              y={cy + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={color}
              fontSize={size * 0.35}
              fontWeight={700}
              fontFamily="monospace"
            >
              &gt;_
            </text>
          </>
        );

      case 'practice':
        // Practice / star
        return (
          <>
            <circle cx={cx} cy={cy} r={bgR} fill={color} opacity={0.12} />
            <polygon
              points={`${cx},${cy - 7} ${cx + 2},${cy - 2} ${cx + 7},${cy - 1} ${cx + 3},${cy + 3} ${cx + 4},${cy + 8} ${cx},${cy + 5} ${cx - 4},${cy + 8} ${cx - 3},${cy + 3} ${cx - 7},${cy - 1} ${cx - 2},${cy - 2}`}
              fill={color}
              opacity={0.7}
            />
          </>
        );

      case 'ethics':
        // Ethics / balance scale
        return (
          <>
            <circle cx={cx} cy={cy} r={bgR} fill={color} opacity={0.12} />
            <line x1={cx} y1={cy - 7} x2={cx} y2={cy + 5} stroke={color} strokeWidth={1.5} />
            <line x1={cx - 8} y1={cy - 3} x2={cx + 8} y2={cy - 3} stroke={color} strokeWidth={1.5} />
            <path
              d={`M${cx - 8},${cy - 3} Q${cx - 8},${cy + 1} ${cx - 5},${cy + 1} Q${cx - 2},${cy + 1} ${cx - 2},${cy - 3}`}
              fill="none"
              stroke={color}
              strokeWidth={1}
            />
            <path
              d={`M${cx + 2},${cy - 3} Q${cx + 2},${cy + 1} ${cx + 5},${cy + 1} Q${cx + 8},${cy + 1} ${cx + 8},${cy - 3}`}
              fill="none"
              stroke={color}
              strokeWidth={1}
            />
            <rect x={cx - 3} y={cy + 5} width={6} height={2} rx={1} fill={color} />
          </>
        );

      case 'fairness':
        // Fairness / balanced circles
        return (
          <>
            <circle cx={cx} cy={cy} r={bgR} fill={color} opacity={0.12} />
            <circle cx={cx - 5} cy={cy - 2} r={4} fill="none" stroke={color} strokeWidth={1.5} />
            <circle cx={cx + 5} cy={cy + 2} r={4} fill="none" stroke={color} strokeWidth={1.5} />
            <line x1={cx - 2} y1={cy - 1} x2={cx + 2} y2={cy + 1} stroke={color} strokeWidth={1} strokeDasharray="2 1" />
          </>
        );

      case 'security':
        // Security / shield with check
        return (
          <>
            <circle cx={cx} cy={cy} r={bgR} fill={color} opacity={0.12} />
            <path
              d={`M${cx},${cy - 8} L${cx + 7},${cy - 4} L${cx + 7},${cy + 2} Q${cx + 7},${cy + 7} ${cx},${cy + 8} Q${cx - 7},${cy + 7} ${cx - 7},${cy + 2} L${cx - 7},${cy - 4} Z`}
              fill="none"
              stroke={color}
              strokeWidth={1.5}
            />
            <polyline
              points={`${cx - 3},${cy} ${cx - 1},${cy + 2} ${cx + 4},${cy - 3}`}
              fill="none"
              stroke={color}
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        );

      case 'data':
        // Data / bar chart
        return (
          <>
            <circle cx={cx} cy={cy} r={bgR} fill={color} opacity={0.12} />
            <rect x={cx - 7} y={cy - 1} width={3} height={7} rx={0.5} fill={color} opacity={0.6} />
            <rect x={cx - 3} y={cy - 5} width={3} height={11} rx={0.5} fill={color} opacity={0.8} />
            <rect x={cx + 1} y={cy - 3} width={3} height={9} rx={0.5} fill={color} opacity={0.7} />
            <rect x={cx + 5} y={cy - 7} width={3} height={13} rx={0.5} fill={color} />
          </>
        );

      case 'work':
        // Work / briefcase
        return (
          <>
            <circle cx={cx} cy={cy} r={bgR} fill={color} opacity={0.12} />
            <rect x={cx - 8} y={cy - 3} width={16} height={10} rx={2} fill="none" stroke={color} strokeWidth={1.5} />
            <path
              d={`M${cx - 4},${cy - 3} L${cx - 4},${cy - 5} Q${cx - 4},${cy - 7} ${cx - 2},${cy - 7} L${cx + 2},${cy - 7} Q${cx + 4},${cy - 7} ${cx + 4},${cy - 5} L${cx + 4},${cy - 3}`}
              fill="none"
              stroke={color}
              strokeWidth={1.2}
            />
            <line x1={cx - 8} y1={cy + 1} x2={cx + 8} y2={cy + 1} stroke={color} strokeWidth={1} />
          </>
        );

      case 'future':
        // Future / rocket
        return (
          <>
            <circle cx={cx} cy={cy} r={bgR} fill={color} opacity={0.12} />
            <path
              d={`M${cx},${cy - 8} Q${cx + 4},${cy - 4} ${cx + 3},${cy + 2} L${cx - 3},${cy + 2} Q${cx - 4},${cy - 4} ${cx},${cy - 8} Z`}
              fill="none"
              stroke={color}
              strokeWidth={1.5}
            />
            <circle cx={cx} cy={cy - 2} r={1.5} fill={color} />
            <line x1={cx - 2} y1={cy + 2} x2={cx - 3} y2={cy + 5} stroke={color} strokeWidth={1.2} />
            <line x1={cx + 2} y1={cy + 2} x2={cx + 3} y2={cy + 5} stroke={color} strokeWidth={1.2} />
            <line x1={cx} y1={cy + 2} x2={cx} y2={cy + 6} stroke={color} strokeWidth={1.2} />
          </>
        );

      default:
        // Fallback: simple circle with chapter number or icon name
        return (
          <>
            <circle cx={cx} cy={cy} r={bgR} fill={color} opacity={0.12} />
            <text
              x={cx}
              y={cy + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={color}
              fontSize={size * 0.4}
              fontWeight={700}
            >
              {chapterNumber || '?'}
            </text>
          </>
        );
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {renderIcon()}
    </svg>
  );
};

export default ChapterIllustration;
