import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="I love it!"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("I love it!");
    })

    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="I love it!"/>);
        const root = component.root;
        expect(() => {
            let span = root.findByType("span");
        }).toThrow();
    })

    test("after creation input shouldn`t be displayed", () => {
        const component = create(<ProfileStatus status="I love it!"/>);
        const root = component.root;
        let input = root.findByType("input");
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    })

    test("after creation span should contains correct status", () => {
        const component = create(<ProfileStatus status="I love it!"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("I love it!");
    })
})