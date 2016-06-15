# name: test-plugin
# about: testing repository transitory plugin
# version: 0.1
# authors: Mittineague
# url: https://github.com/Mittineague/test-plugin.git


after_initialize do

  class Guardian
    class << self

      def can_send_private_message?(target)
        (target.is_a?(Group) || target.is_a?(User)) &&
        # User is authenticated
        authenticated? &&
        # Can't send message to yourself
        is_not_me?(target) &&
        # Have to be a basic level at least
# attempt to make Guardian kinder to New members
        #@user.has_trust_level?(SiteSetting.min_trust_to_send_messages) &&
        (@user.has_trust_level?(SiteSetting.min_trust_to_send_messages) || target.staff?) &&
        # PMs are enabled
        (SiteSetting.enable_private_messages ||
          @user.username == SiteSetting.site_contact_username ||
          @user == Discourse.system_user) &&
        # Can't send PMs to suspended users
        (is_staff? || target.is_a?(Group) || !target.suspended?) &&
        # Blocked users can only send PM to staff
        (!@user.blocked? || target.staff?)
      end

    end
  end
  
end  
