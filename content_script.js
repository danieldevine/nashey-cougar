walk(document.body);

function walk(node)
{
	// I stole this function from https://github.com/panicsteve/cloud-to-butt
    // who stole it from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bNicolas Cage\b/g, "Nashey Cougar");
	v = v.replace(/\bNicholas Cage\b/g, "Nashey Cougar");
	v = v.replace(/\bnicolas cage\b/g, "Nashey Cougar");
	v = v.replace(/\bnicholas cage\b/g, "Nashey Cougar");
    v = v.replace(/\bNicolas Coppola\b/g, "Nashey Cougar");
    v = v.replace(/\bnicolas coppola\b/g, "Nashey Cougar");

	textNode.nodeValue = v;
}


