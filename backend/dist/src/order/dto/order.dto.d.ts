export declare class OrderDto {
    peopleSend: {
        fullName: String;
        phoneNumber: String;
        city: String;
        district: String;
        address: String;
        email: string;
    };
    peopleRecieve: {
        fullName: String;
        phoneNumber: String;
        city: String;
        district: String;
        email: String;
        address: String;
    };
    time: {
        year: String;
        month: String;
        day: String;
        hour: String;
    };
    message: {
        titleSend: String;
        occasion: String;
        noteSendToPersonReceive: String;
        noteSendToPersonAdmin: String;
    };
    code: String;
}
