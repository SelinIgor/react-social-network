import React from "react";
import { create } from "react-test-renderer";

import ProfileStatus from "./ProfileStatus";

describe("Status from props should be in state", () => {
    test("it shows the expected text when clicked (testing the wrong way!)", () => {
        const component = create(<ProfileStatus status="all good girls go to hell" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("all good girls go to hell");
    });
    test("Matches the snapshot", () => {
        const span = create(<ProfileStatus />);
        expect(span.toJSON()).exists();
    });
});
