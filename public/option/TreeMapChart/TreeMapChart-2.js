const option = {
    theme: 'light',
    tooltip: {
        formatter: (params, ticket, callback) => {
            let htmlString = '';
            let data = params.data;
            htmlString +=
                '<div>' +
                '<span style="width:10px;display:inline-block;height:10px;border-radius:5px; background-color:' + params.color + ';">' +
                '</span>' +
                '<span style="margin-left:5px;>' +
                '<span style="display:inline-block;">' + data.name + '</span>' +
                '<span> ' + data.value + '</span>' +
                '</div>';
            return htmlString
        }
    },
    data: [{
        value: 40,
        name: 'Access',
        path: 'Access'
    },
    {
        value: 180,
        name: 'Accounts',
        path: 'Accounts',
        children: [{
            value: 76,
            name: 'Access',
            path: 'Account/Access',
            children: [{
                value: 12,
                name: 'DefaultAccess.bundles',
                path: 'Account/Access/DefaultAccess.bundles',
            },
            {
                value: 28,
                name: 'FacebookAccessPlugin.bundles',
                path: 'Account/Access/FacebookAccessPlugin.bundles',
            },
            {
                value: 21,
                name: 'LinkedInAccess.bundles',
                path: 'Account/Access/LinkedInAccess.bundles',
            },
            {
                value: 16,
                name: 'TencentWeiboAccessPlugin.bundles',
                path: 'Account/Access/TencentWeiboAccessPlugin.bundles',
            },
            ],
        },
        {
            value: 91,
            name: 'Authorizes',
            path: 'Account/Authorizes',
            children: [{
                value: 24,
                name: 'FacebookAuthorizePlugin.bundles',
                path: 'Account/Authorize/FacebookAuthorizePlugin.bundles',
            },
            {
                value: 16,
                name: 'LinkedInAuthorizePlugin.bundles',
                path: 'Account/Authorize/LinkedInAuthorizePlugin.bundles',
            },
            {
                value: 20,
                name: 'TencentWeiboAuthorizePlugin.bundle',
                path: 'Account/Authorize/TencentWeiboAuthorizePlugin.bundles',
            },
            {
                value: 16,
                name: 'TwitterAuthorizePlugin.bundles',
                path: 'Account/Authorize/TwitterAuthorizePlugin.bundles',
            },
            {
                value: 16,
                name: 'WeiboAuthorizePlugin.bundles',
                path: 'Account/Authorize/WeiboAuthorizePlugin.bundles',
            },
            ],
        },
        {
            value: 12,
            name: 'Notifications',
            path: 'Account/Notifications',
            children: [{
                value: 12,
                name: 'SPAA.bundles',
                path: 'Account/Notification/SPAA.bundles',
            },],
        },
        ],
    },
    {
        value: 200,
        name: 'Address Plugs',
        path: 'Address Plugs',
        children: [{
            value: 50,
            name: 'CardDAVPlugin.sourcebundles',
            path: 'Address Plug/CardDAVPlugin.sourcebundles',
            children: [{
                value: 50,
                name: 'Content',
                path: 'Address Plug/CardDAVPlugin.sourcebundle/Content',
            },],
        },
        {
            value: 28,
            name: 'DirectoryServices.sourcebundles',
            path: 'Address Plug/DirectoryServices.sourcebundles',
            children: [{
                value: 28,
                name: 'Content',
                path: 'Address Plug/DirectoryServices.sourcebundle/Content',
            },],
        },
        {
            value: 100,
            name: 'Exchange.sourcebundles',
            path: 'Address Plug/Exchange.sourcebundles',
            children: [{
                value: 100,
                name: 'Content',
                path: 'Address Plug/Exchange.sourcebundle/Content',
            },],
        },
        {
            value: 150,
            name: 'LDAP.sourcebundles',
            path: 'Address Plug/LDAP.sourcebundles',
            children: [{
                value: 150,
                name: 'Content',
                path: 'Address Plug/LDAP.sourcebundle/Content',
            },],
        },
        {
            value: 20,
            name: 'LocalSource.sourcebundles',
            path: 'Address Plug/LocalSource.sourcebundles',
            children: [{
                value: 20,
                name: 'Content',
                path: 'Address Plug/LocalSource.sourcebundle/Content',
            },],
        },
        ],
    },
    {
        value: 36,
        name: 'Assistant',
        path: 'Assistant',
        children: [{
            value: 36,
            name: 'Plugin',
            path: 'Assistants/Plugin',
            children: [{
                value: 36,
                name: 'Address.AssistantsBundles',
                path: 'Assistants/Plugins/Address.AssistantsBundles',
            },
            {
                value: 8,
                name: 'GenericAddressHandler.addresshandlers',
                path: 'Recent/Plugins/GenericAddressHandler.addresshandlers',
            },
            {
                value: 12,
                name: 'MapsRecent.addresshandlers',
                path: 'Recent/Plugins/MapsRecent.addresshandlers',
            },
            ],
        },],
    },
    ],
};