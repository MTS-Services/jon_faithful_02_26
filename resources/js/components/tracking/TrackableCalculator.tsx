import { type ReactNode, useCallback } from 'react';
import { trackEvent } from '@/lib/analytics/gtag';

interface TrackableCalculatorProps {
    calculatorId: string;
    children: (helpers: {
        trackInteraction: (fieldName: string, fieldValue: string | number) => void;
        trackResult: (resultValue: number, inputsSummary: string) => void;
    }) => ReactNode;
}

export default function TrackableCalculator({
    calculatorId,
    children,
}: TrackableCalculatorProps) {
    const trackInteraction = useCallback(
        (fieldName: string, fieldValue: string | number) => {
            trackEvent('calculator_interact', {
                field_name: fieldName,
                field_value: fieldValue,
                calculator_id: calculatorId,
            });
        },
        [calculatorId],
    );

    const trackResult = useCallback(
        (resultValue: number, inputsSummary: string) => {
            trackEvent('calculator_result', {
                calculator_id: calculatorId,
                result_value: resultValue,
                inputs_summary: inputsSummary,
            });
        },
        [calculatorId],
    );

    return <>{children({ trackInteraction, trackResult })}</>;
}
