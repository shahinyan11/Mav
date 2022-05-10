ifeq ("$(shell echo "int main(){}" | $(CXX) -fdiagnostics-color -x c - -o /dev/null 2>&1)", "")
	override CXXFLAGS += -fdiagnostics-color
else ifeq ("$(shell echo "int main(){}" | $(CXX) -fcolor-diagnostics -x c - -o /dev/null 2>&1)", "")
	override CXXFLAGS += -fcolor-diagnostics
endif

NORMAL=\033[0m
RED=\033[31;01m
GREEN=\033[32;01m
YELLOW=\033[33;01m
BLUE=\033[34;01m

define print
	@echo "$($(strip $(1)))--$(2)$(NORMAL)"
endef

install:
	$(call print, BLUE, Updating yarn)
	@yarn install
	$(call print, YELLOW, Make sure you are using node v15.8.0)
	@echo your version of node:
	@node -v
	@echo
	$(call print, YELLOW, Make sure you are using yarn v1.22.10)
	$(call print, NORMAL, hint: brew update && brew upgrade yarn)
	@echo your version of yarn:
	@yarn -v
	@echo

development:
	$(call print, BLUE, Starting React)
	@yarn install
	@REACT_DEBUGGER="unset ELECTRON_RUN_AS_NODE && open -g 'rndebugger://set-debugger-loc?port=19000' ||" yarn start
