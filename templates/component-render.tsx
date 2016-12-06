import * as React from "react";

import  { Render }  from "../../decorators/Render";

@Render({
	template: function(){
		return <div>
        	</div>;
	}
})
export class extends React.Component<{}, {}>{
	constructor(props: any) {
		super(props);
	}
}
