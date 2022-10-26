import React from 'react';
import ContentListDetails from './ContentListDetails';

const ContentList = ({item}) => {
    const {contentId , contentTitle , contentInfo } = item
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-2 py-2 mx-auto md:p-2">
        <div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 text-xl">{contentTitle}</summary>
				{
                    contentInfo.map( item => <ContentListDetails
                    key={item.infoId}
                    item={item}
                    ></ContentListDetails>)
                }
			</details>
		</div>
	</div>
</section>
    );
};

export default ContentList;