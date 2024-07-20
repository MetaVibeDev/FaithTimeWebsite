// Ref: https://backend-data.metavibe-api.com/swagger/index.html#/action/post_action_collect
type collectInfoType = {
    actionName: string;
    actionType: number;
    dateTime: string;
    duration: number;
    platform: number;
    uid: string;
};

export type {
    collectInfoType
};