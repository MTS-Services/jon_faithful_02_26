export type GA4EventName =
    | 'form_start'
    | 'form_submit'
    | 'form_error'
    | 'cta_click'
    | 'calculator_interact'
    | 'calculator_result'
    | 'scroll_depth'
    | 'outbound_click'
    | 'page_engagement';

export interface GA4EventParams {
    form_start: {
        form_id: string;
        form_name: string;
        page_location: string;
    };
    form_submit: {
        form_id: string;
        form_name: string;
        submission_time_seconds: number;
    };
    form_error: {
        form_id: string;
        error_field: string;
        error_message: string;
    };
    cta_click: {
        cta_text: string;
        cta_location: string;
        destination_url?: string;
    };
    calculator_interact: {
        field_name: string;
        field_value: string | number;
        calculator_id: string;
    };
    calculator_result: {
        calculator_id: string;
        result_value: number;
        inputs_summary: string;
    };
    scroll_depth: {
        depth_percentage: 25 | 50 | 75 | 90 | 100;
        page_location: string;
    };
    outbound_click: {
        link_url: string;
        link_text: string;
    };
    page_engagement: {
        engaged_seconds: number;
        page_location: string;
    };
}
