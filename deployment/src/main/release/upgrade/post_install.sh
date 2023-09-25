#!/bin/bash
#check user
CUR_PATH=$(cd `dirname $0`;pwd)
SCRIPT_PATH=$0
IPMC_USER="`stat -c '%U' ${SCRIPT_PATH}`"
export IPMC_USER
CURRENT_USER="`/usr/bin/id -u -n`"
if [ "${IPMC_USER}" != "${CURRENT_USER}" ]
then
    echo "only ${IPMC_USER} can execute this script."
    exit 1
fi
umask 027

cd $APP_ROOT


refresh_folder_permissions(){
    chmod $2 $1
    for fileName  in ` ls $1 `
    do
        if [ -d $1"/"$fileName  ]
        then
            refresh_folder_permissions $1"/"$fileName $2
        fi
    done
}

refresh_file_permissions(){
    for fileName in ` ls $1 `
    do
        if [ -d $1"/"$fileName  ]
        then
            refresh_file_permissions $1"/"$fileName $2
        else
            chmod $2 $1"/"$fileName
        fi
    done
}

refresh_file_permissions $APP_ROOT/bin 500
refresh_folder_permissions $APP_ROOT/bin 500

refresh_file_permissions $APP_ROOT/conf 400
refresh_folder_permissions $APP_ROOT/conf 500

refresh_file_permissions $APP_ROOT/etc/authconf 400
refresh_folder_permissions $APP_ROOT/etc/authconf 500
refresh_file_permissions $APP_ROOT/etc/talcmon 400
refresh_folder_permissions $APP_ROOT/etc/talcmon 500
refresh_file_permissions $APP_ROOT/etc/log4j 400
refresh_folder_permissions $APP_ROOT/etc/log4j 500
refresh_folder_permissions $APP_ROOT/etc/conf 500
chmod 400 $APP_ROOT/etc/platformversion.xml
chmod 400 $APP_ROOT/etc/conf/restclient.json

refresh_file_permissions $APP_ROOT/lib 400
refresh_folder_permissions $APP_ROOT/lib 500

refresh_file_permissions $APP_ROOT/pub 400
chmod 440 $APP_ROOT/pub/app_define.json
refresh_folder_permissions $APP_ROOT/pub 550

chmod 500 $APP_ROOT/upgrade/post_install.sh
refresh_folder_permissions $APP_ROOT/upgrade 500

refresh_file_permissions $APP_ROOT/webapps 400
refresh_folder_permissions $APP_ROOT/webapps 500

refresh_folder_permissions $APP_ROOT/pub/i18n 500
refresh_folder_permissions $APP_ROOT/pub/infocenter 500

result=$?;$CUR_PATH/../../../../manager/agent/tools/shscript/syslogutils.sh "$(basename $0)" "$result" "post install for ItmWebsite";exit $result