import angular from 'angular';
import _ from 'lodash-es';

class RolesController {
  /* @ngInject */
  constructor(Notifications, RoleService) {
    this.Notifications = Notifications;
    this.RoleService = RoleService;
  }

  async $onInit() {
    this.roles = [];

    try {
      this.roles = await this.RoleService.roles();
      this.roles = _.orderBy(this.roles, 'Priority', 'asc');
    } catch (err) {
      this.Notifications.error('Failure', err, 'Unable to retrieve roles');
    }
  }
}
export default RolesController;
angular.module('portainer.rbac').controller('RolesController', RolesController);
