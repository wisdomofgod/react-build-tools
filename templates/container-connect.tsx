import * as React from "react";

import { Connect } from "../decorators/Connect";

@Connect([], [])
export default class extends React.Component<{}, {}>{
	constructor(props: any) {
		super(props);
	}

	render() {
		return <div>
			</div>;
	}
}
